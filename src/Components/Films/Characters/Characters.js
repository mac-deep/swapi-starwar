import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Characters({ eachCharacter }) {
  const [characterDetail, setCharacterDetail] = useState([]);
  const [confirm, setConfirm] = useState(false);

  useEffect(() => {
    const fetchCharacters = async () => {
      const array = [];
      eachCharacter.map((item) => {
        let index = 28;
        const tempArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        if (tempArray.includes(item[index + 1])) {
          array.push(item[index] + item[index + 1]);
        } else {
          array.push(item[index]);
        }
        return array;
      });

      return new Promise((resolve, reject) => {
        const myPromise = eachCharacter.map(async (character, index) => {
          const req = await axios.get(
            `https://swapi.dev/api/people/${array[index]}/`
          );
          const { data } = req;
          return data;
        });
        const result = Promise.all(myPromise);
        resolve(result);
      });
    };
    fetchCharacters()
      .then((result) => {
        const data = result;
        setCharacterDetail(data);
        setConfirm(true);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [eachCharacter]);
  return (
    <>
      {confirm ? (
        <>
          {characterDetail.map((character, index) => (
            <div key={index}>
              <p>{character.name}</p>
            </div>
          ))}
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

export default Characters;
