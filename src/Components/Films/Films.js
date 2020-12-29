import React from "react";
import { useEffect, useState } from "react";
import Card from "./Card";
import styles from "./Films.module.css";
import Fullpage from "./Fullpage";
import { Route, BrowserRouter as Router } from "react-router-dom";
// import { fetchFilm } from "../API";

function Films() {
  const [confirm, setConfirm] = useState(false);
  const [films, setFilms] = useState([]);

  useEffect(async () => {
    async function fetchFilm() {
      const response = await fetch("https://swapi.dev/api/films/");
      const data = await response.json();
      setFilms(data.results);
      setConfirm(true);
    }
    fetchFilm();
  }, []);
  console.log(films);

  return confirm ? (
    <div className={styles.container}>
      {/* <div className={styles.heading}>STARWARS FILMS</div> */}
      {films.map((films) => (
        <Card
          key={films.url}
          title={films.title}
          director={films.director}
          producer={films.producer}
          spaceship={films.starships}
          opening_crawl={films.opening_crawl}
          episode_id={films.episode_id}
          release_date={films.release_date}
          url={films.url}
        />
      ))}
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export default Films;
