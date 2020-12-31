import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Planets({ eachPlanet }) {
  const [planetDetail, setPlanetDetail] = useState([]);

  useEffect(() => {
    const fetchPlanet = async () => {
      const array = [];
      eachPlanet.map((item) => {
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
        const myPromise = eachPlanet.map(async (planet, index) => {
          const req = await axios.get(
            `https://swapi.dev/api/planets/${array[index]}/`
          );
          const { data } = req;
          return data;
        });
        const result = Promise.all(myPromise);
        resolve(result);
      });
    };
    fetchPlanet()
      .then((result) => {
        const data = result;
        setPlanetDetail(data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
  return (
    <div>
      {planetDetail.map((planet) => (
        <div>
          <p>{planet.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Planets;
