import React from "react";
import { useState, useEffect } from "react";

function Characters({ eachCharacter }) {
  const [characterDetail, setCharacterDetail] = useState([]);

  //   eachCharacter.map((id) => {
  //     eachCharacter[id][eachCharacter[id].length - 2];
  //   });

  //   console.log(characterID);
  //   const fetchCharacters = async() => {
  //           return new Promise((resolve, reject) => {
  //               const myPromise = eachCharacter.map( async character => {
  //                   const req = await fetch(`https://swapi.dev/api/people/${}/`);
  //                   const data = await req.json();
  //               });
  //           })
  //   }
  //   console.log(eachCharacter[i][eachCharacter[i].length - 2]);
  useEffect(() => {
    // async function fetchCharacter() {
    //   const response = await fetch(`https://swapi.dev/api/people/1/`);
    //   const data = await response.json();
    //   setCharacters(data);
    // }
    // fetchCharacter();
  }, []);

  return (
    <div>
      <ul>{/* <h3>{characters.name}</h3> */}</ul>
    </div>
  );
}

export default Characters;
