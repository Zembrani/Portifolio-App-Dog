import React, { useEffect, useRef } from "react";

import FormAddDog, { handleSubmit } from "../FormAddDog/FormAddDog";

import "./Modal.css";

const Modal = (props) => {
  const refForm = useRef();

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
            <FormAddDog dog={props.dog} ref={refForm}></FormAddDog>
          </div>
          <div className="modal-footer">
            <button className="button close" onClick={props.onClose}>
              Fechar
            </button>
            <button
              className="button save"
              onClick={() => refForm.current.handleSubmit(props.callback)}
            >
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
