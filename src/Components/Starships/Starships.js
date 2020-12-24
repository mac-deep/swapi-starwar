import React from "react";
import { useEffect, useState } from "react";
import Card from "./Card";

function Starships() {
  const [confirm, setConfirm] = useState(false);
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    async function fetchStarship() {
      const response = await fetch("https://swapi.dev/api/starships/");
      const data = await response.json();
      setStarships(data.results);
      setConfirm(true);
    }

    fetchStarship();
  }, []);
  console.log(starships);
  return confirm ? (
    <div>
      {starships.map((starships) => (
        <Card
          passengers={starships.passengers}
          name={starships.name}
          model={starships.model}
          films={starships.films}
        />
      ))}
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export default Starships;
