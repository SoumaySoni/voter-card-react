// VoterForm.js
import React, { useState } from "react";
import Cards from "./Cards";
import votingman from "../images/votingman.webp";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


const VoterForm = () => {
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [dob, setDob] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [validated, setValidated] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleReset = () => {
    setName("");
    setContact("");
    setGender("");
    setAddress("");
    setFatherName("");
    setDob("");
    setShowModal(false);
    // location.reload(true)
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setShowModal(true);
    }
    setValidated(true);
  };

  return (
    <div className="App container-fluid">
      <div className="row main-container">
        <div className="col-xl-5 d-flex flex-column align-items-center justify-content-center form">
          <h1 className="text-center mt-3">Voter Card Generator</h1>
          <h3>Apply for your voter card in minutes</h3>

          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3 d-flex flex-column">
              <Form.Group>
                <Form.Control
                  className="col-12 mx-auto mb-4 pl-1"
                  required
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  className="col-12 mx-auto mb-4 pl-1"
                  required
                  type="text"
                  placeholder="Father's Name"
                  name="fatherName"
                  id="fatherName"
                  value={fatherName}
                  onChange={(e) => setFatherName(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  className="col-12 mx-auto mb-4 pl-1 "
                  required
                  type="date"
                  placeholder="Enter Your Date of Birth"
                  name="dob"
                  id="dob"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  className="col-12 mx-auto mb-4 pl-1 fatherName-input"
                  required
                  type="number"
                  placeholder="Enter Mobile number"
                  name="contact"
                  id="contact"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </Form.Group>

              <Form.Select
                aria-label="Default select example"
                className="col-12 mx-auto mb-4 pl-1 select"
                onChange={(e) => setGender(e.target.value)}
              >
                <option>Select Gender</option>
                <option name="Male" id="Male" value="Male">
                  Male
                </option>
                <option name="Female" id="Female" value="Female">
                  Female
                </option>
                <option name="Other" id="Other" value="Other">
                  Other
                </option>
              </Form.Select>

              <Form.Group>
                <Form.Control
                  as="textarea"
                  className="col-12 mx-auto mb-4 pl-1 fatherName-input"
                  required
                  cols="60"
                  rows="1"
                  type="text"
                  placeholder="Enter Your Address"
                  name="address"
                  value={address}
                  id="address"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Form.Group>
            </Row>
            <div className="row d-flex justify-content-center button">
              <Button
                className="mx-4"
                type="reset"
                value="reset"
                onClick={handleReset}
              >
                Reset
              </Button>
              <Button className="mx-4" type="submit">
                GENERATE VOTER CARD
              </Button>
            </div>
          </Form>
        </div>
        <div className="col-xl-7 image">
          <img src={votingman} alt="" />
        </div>
        <Cards
          name={name}
          fatherName={fatherName}
          contact={contact}
          gender={gender}
          dob={dob}
          address={address}
          show={showModal}
          onClose={() => setShowModal(false)}
          handleReset={() => {
            handleReset();
          }}
        />
      </div>
    </div>
  );
};

export default VoterForm;
