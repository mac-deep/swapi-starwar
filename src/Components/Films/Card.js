import React from "react";
import styles from "./Films.module.css";

const Card = ({
  title,
  director,
  producer,
  opening_crawl,
  release_date,
  episode_id,
}) => {
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
          <button>Know More</button>
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
