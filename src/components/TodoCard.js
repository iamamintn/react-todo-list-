import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function TodoCard(props) {
  const [isModalOpen, setIsMOdalOpen] = useState(false);
  const [Done, setDone] = useState(false);

  function deletHandler() {
    setIsMOdalOpen(true);
  }

  function closeModalHandlerDone() {
    setIsMOdalOpen(false);
    setDone(true);
  }

  function closeModalHandlerNotDone() {
    setIsMOdalOpen(false);
    setDone(false);
  }

  function closeModalHandlerOnly() {
    setIsMOdalOpen(false);
  }

  return (
    <div
      className="card"
      style={{ backgroundColor: Done ? "#0ece94" : "#cf3c3c" }}
    >
      <h2> {props.title} </h2>
      <p className="Done-label"> {Done ? "Done" : "not Done"} </p>
      <div className="actions">
        <button className="btn" onClick={deletHandler}>
          More Information
        </button>
      </div>
      {isModalOpen && (
        <Modal
          info={props.cardInfo}
          Titr={props.title}
          onDone={closeModalHandlerDone}
          onNotdone={closeModalHandlerNotDone}
        />
      )}
      {isModalOpen && <Backdrop onClose={closeModalHandlerOnly} />}
    </div>
  );
}

export default TodoCard;
