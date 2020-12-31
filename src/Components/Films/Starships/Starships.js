import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Starships({ eachStarship }) {
  const [starshipDetail, setStarshipDetail] = useState([]);

  useEffect(() => {
    const fetchStarship = async () => {
      const array = [];
      eachStarship.map((item) => {
        let index = 31;
        const tempArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        if (tempArray.includes(item[index + 1])) {
          array.push(item[index] + item[index + 1]);
        } else {
          array.push(item[index]);
        }
        return array;
      });

      return new Promise((resolve, reject) => {
        const myPromise = eachStarship.map(async (starship, index) => {
          const req = await axios.get(
            `https://swapi.dev/api/starships/${array[index]}/`
          );
          const { data } = req;
          return data;
        });
        const result = Promise.all(myPromise);
        resolve(result);
      });
    };
    fetchStarship()
      .then((result) => {
        const data = result;
        setStarshipDetail(data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
  return (
    <div>
      {starshipDetail.map((starship) => (
        <div>
          <p>{starship.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Starships;
