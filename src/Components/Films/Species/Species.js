import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Species({ eachSpecies }) {
  const [speciesDetail, setspeciesDetail] = useState([]);

  useEffect(() => {
    const fetchSpecies = async () => {
      const array = [];
      eachSpecies.map((item) => {
        let index = 29;
        const tempArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        if (tempArray.includes(item[index + 1])) {
          array.push(item[index] + item[index + 1]);
        } else {
          array.push(item[index]);
        }
        return array;
      });

      return new Promise((resolve, reject) => {
        const myPromise = eachSpecies.map(async (species, index) => {
          const req = await axios.get(
            `https://swapi.dev/api/species/${array[index]}/`
          );
          const { data } = req;
          return data;
        });
        const result = Promise.all(myPromise);
        resolve(result);
      });
    };
    fetchSpecies()
      .then((result) => {
        const data = result;
        setspeciesDetail(data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [eachSpecies]);
  return (
    <div>
      {speciesDetail.map((species) => (
        <div>
          <p>{species.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Species;
