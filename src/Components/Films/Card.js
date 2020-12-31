import React from "react";
import styles from "./Films.module.css";
import { Link } from "react-router-dom";

const Card = ({
  title,
  director,
  producer,
  opening_crawl,
  release_date,
  episode_id,
  characters,
  url,
}) => {
  const links = {
    textDecoration: "none",
  };

  return (
    <div className={styles.filmMain}>
      <div>
        <h2 className={styles.filmTitle}>{title}</h2>
      </div>
      <div className={styles.epId}>{episode_id}</div>

      <div>
        <div className={styles.content}>
          <p className={styles.bold}>
            <b>Released on: </b> {release_date}
          </p>
          <p className={styles.bold}>
            <b>Director:</b> {director}
          </p>
          <p className={styles.bold}>
            <b>Producer: </b>
            {producer}
          </p>
          <div className={styles.btnContainer}>
            <Link style={links} to={`/films/${url[url.length - 2]}`}>
              <button className={styles.btn}>Know More</button>
            </Link>
          </div>
        </div>

        <div className={styles.info}>{/* <p>{opening_crawl}</p> */}</div>
        <div>
          {/* <b>Starships:</b> */}
          {/* {starships.map((starships) => (
            <ul>
              <li>{starships.name}</li>
            </ul>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Card;
