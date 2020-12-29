import axios from "axios";
// import { useState, useEffect } from "react";

// const [films, setFilms] = useState([]);

export const fetchFilm = async () => {
  const res = await fetch("https://swapi.dev/api/films/1?format=json");
  const { data } = await res.json();
  // setFilms(data.results);
  // setConfirm(true);
};
