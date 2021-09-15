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
        {props.values.map((value) => (
          <li key={value.id}>
            <Card
              photo={value.photo}
              name={value.name}
              breed={value.breed}
              weight={value.weight}
              age={value.age}
              dog={value}
              editCallback={props.callback}
              deleteCallback={null}
            />
          </li>
        ))}
      </ul>
      <div className="line"></div>
    </div>
  );
}
