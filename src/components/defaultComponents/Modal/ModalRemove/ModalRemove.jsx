import React, { useEffect } from "react";

import "../Modal.css";

const ModalRemove = (props) => {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  const remove = () => {
    props.callback(props.id);
    props.onClose();
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
          <div className="modal-header">Excluir registro?</div>
          <div className="modal-footer">
            <button className="button close" onClick={props.onClose}>
              Cancelar
            </button>
            <button className="button save" onClick={remove}>
              Excluir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalRemove;
