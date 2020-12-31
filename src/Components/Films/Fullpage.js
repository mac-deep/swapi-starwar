import React, { useEffect, useState } from "react";
import styles from "./Fullpage.module.css";
import Characters from "./Characters/Characters";
import Starships from "./Starships/Starships";
import Planets from "./Planets/Planets";
import Species from "./Species/Species";
import LoadingPage from "../LoadingPage";

function Fullpage({ match }) {
  const [confirm, setConfirm] = useState(false);
  const [singleFilm, setSingleFilm] = useState([]);

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
    <div className={styles.container}>
      <div className={styles.main_container}>
        <div className={styles.head_container}>
          <span>Episode: {singleFilm.episode_id}</span>
          <div className={styles.head}>
            <span> {singleFilm.title}</span>
          </div>

          <p className={styles.opening_info}>{singleFilm.opening_crawl}</p>

          <div className={styles.credential}>
            <h2>Producer: {singleFilm.producer}</h2>
            <h2>Director: {singleFilm.director}</h2>
          </div>
        </div>

        <div className={styles.components_container}>
          <div className={styles.col_1}>
            <div className={styles.component_character}>
              <h1 className={styles.characters}>Characters: </h1>
              <Characters eachCharacter={singleFilm.characters} />
            </div>
          </div>
          <div className={styles.col_2}>
            <div className={styles.component_starship}>
              <h1>Starships: </h1>
              <Starships eachStarship={singleFilm.starships} />
            </div>
            <div className={styles.component_planet}>
              <h1>Planets: </h1>
              <Planets eachPlanet={singleFilm.planets} />
            </div>
          </div>
          <div className={styles.col_3}>
            <div className={styles.component_species}>
              <h1>Species: </h1>
              <Species eachSpecies={singleFilm.species} />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <LoadingPage />
  );
}

export default Fullpage;
