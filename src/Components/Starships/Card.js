import React from "react";
// import { useState, useEffect } from "react";

const Card = ({ name, model, id, passengers }) => {
  return (
    <div className="recipe">
      <div className="recipe-head">
        <div className="recipe-title">
          <h1>
            {id} {name}
          </h1>
        </div>
        <div className="recipe-title">
          <p>model: {model}</p>
        </div>

        <div>
          <p>Pasenger capacity: {passengers}</p>
        </div>

        {/* <b>Starships:</b> */}
        {/* {starships.map((starships) => (
            <ul>
              <li>{starships.name}</li>
            </ul>
          ))} */}
      </div>
    </div>
  );
};

export default Card;
