import React from "react";

function Modal(props) {
  function DoneHandler() {
    props.onDone();
  }

  function NotdoneHandler() {
    props.onNotdone();
  }

  return (
    <div className="modal">
      <h3> {props.Titr} </h3>
      <p> {props.info} </p>
      <button className="btn-done" onClick={DoneHandler}>
        Done
      </button>
      <button className="btn-notdone" onClick={NotdoneHandler}>
        Not Done
      </button>
    </div>
  );
}

export default Modal;
