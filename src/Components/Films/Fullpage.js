import React, { useEffect, useState } from "react";
import styles from "./Films.module.css";
import Character from "../Characters/Characters";

function Fullpage({ match }) {
  const [confirm, setConfirm] = useState(false);
  const [singleFilm, setSingleFilm] = useState([]);

  console.log(match);
  useEffect(() => {
    async function fetchSingleFilm() {
      const response = await fetch(
        `https://swapi.dev/api/films/${match.params.id}`
      );
      const data = await response.json();
      setSingleFilm(data);
      setConfirm(true);
    }
    fetchSingleFilm();
  }, []);

  return confirm ? (
    <div className={styles.mainContainer}>
      <h1>
        {singleFilm.episode_id} {singleFilm.title}{" "}
      </h1>
      <h2>Director: {singleFilm.director}</h2>
      <h2>Producer: {singleFilm.producer}</h2>
      <p>{singleFilm.opening_crawl}</p>
      <ul>
        {" "}
        <h1>Characters :</h1>
        <Character eachCharacter={singleFilm.characters} />
        {/* {singleFilm.characters.map((character) => (
          <li>{character}</li>
        ))} */}
      </ul>
    </div>
  ) : (
    <div>
      <h1>Loading...</h1>
    </div>
  );
}

export default Fullpage;
