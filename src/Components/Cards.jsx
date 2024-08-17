// Cards.js
import React from "react";
import "./Cards.css"; // Import the CSS file
import { IoMdClose } from "react-icons/io";

const Cards = ({
  show,
  onClose,
  name,
  fatherName,
  contact,
  gender,
  dob,
  address,
  handleReset,
}) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-container " onClick={onClose}>
      <div className="card-content" onClick={(e) => e.stopPropagation()}>
        <h1>VOTER CARD</h1>
        <p>
          <b>NAME: </b> {name}
        </p>
        <p>
          <b>FATHER NAME: </b> {fatherName}
        </p>
        <p>
          <b>DATE OF BIRTH: </b> {dob}
        </p>
        <p>
          <b>CONTACT: </b> {contact}
        </p>
        <p>
          <b>GENDER: </b> {gender}
        </p>
        <p>
          <b>ADDRESS: </b> {address}
        </p>
        <button className="close" onClick={onClose}>
          <IoMdClose />
        </button>
        <div className="card-button">
          <button>Edit</button>
          <button onClick={handleReset}>I Agree</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
