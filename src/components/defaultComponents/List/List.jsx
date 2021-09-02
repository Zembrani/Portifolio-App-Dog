import React from "react";
import Card from "../Card/Card";

import "./List.css";

export default function List(props) {
  return (
    <div className="List-wrapper">
      <div className="buttons">
        <div>
          <i className="fa fa-solid fa-sort-alpha-asc fa-2x"></i>
        </div>
        <div>
          <i className="fa fa-solid fa-minus-square fa-2x"></i>
        </div>
      </div>
      <ul className="List">
        {props.value.map(({ id, photo, name, breed, weight, age }) => (
          <li key={id}>
            <Card
              photo={photo}
              name={name}
              breed={breed}
              weight={weight}
              age={age}
            />
          </li>
        ))}
      </ul>
      <div className="line"></div>
    </div>
  );
}
