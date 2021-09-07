import React, { useEffect } from "react";

import FormAddDog from "../FormAddDog/FormAddDog";

import "./Modal.css";

const Modal = (props) => {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  if (!props.show) {
    return null;
  }
  return (
    <div>
      <div className="modal" onClick={props.onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">{props.title}</div>
          <div className="modal-body">
            <FormAddDog breed={props.breed} age={props.age}></FormAddDog>
          </div>
          <div className="modal-footer">
            <button className="button" onClick={props.onClose}>
              close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
