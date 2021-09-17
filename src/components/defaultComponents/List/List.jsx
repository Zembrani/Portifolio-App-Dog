import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";
import Skeleton from "../Skeleton/Skeleton";

import "./List.css";

export default function List(props) {
  const [show, setShow] = useState(false);
  const [order, setOrder] = useState(false);

  const orderValues = (a, b, orientation) => {
    if (a.name < b.name) {
      return -orientation;
    }
    if (a.name > b.name) {
      return orientation;
    }
    return 0;
  };

  useEffect(() => {
    let orderOrientation = -1;
    if (order) {
      orderOrientation = 1;
    }
    props.values.sort((a, b) => orderValues(a, b, orderOrientation));
  }, [order]);

  return (
    <div className="List-wrapper">
      <div className="buttons">
        <div onClick={() => setShow(true)}>
          <i className="fa fa-solid fa-plus fa-2x add"></i>
        </div>
        <div className="list-config">
          <div onClick={() => setOrder(!order)}>
            <i className="fa fa-solid fa-sort-alpha-asc fa-2x"></i>
          </div>
          {/* <div>
            <i className="fa fa-solid fa-minus-square fa-2x"></i>
          </div> */}
        </div>
      </div>
      <ul className="List">
        {props.values.map((value) => (
          <li key={value.id}>
            <Card
              id={value.id}
              photo={value.photo}
              name={value.name}
              breed={value.breed}
              weight={value.weight}
              age={value.age}
              dog={value}
              callbackEdit={props.callbackEdit}
              callbackRemove={props.callbackRemove}
            />
          </li>
        ))}
      </ul>
      <div className="line"></div>
      <Modal
        show={show}
        onClose={() => setShow(false)}
        title={"Adicionar Dog"}
        dog={null}
        callback={props.callbackAdd}
      />
    </div>
  );
}
