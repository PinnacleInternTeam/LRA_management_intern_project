import React, { useState } from "react";
import { Modal, Button} from "react-bootstrap";

export default function OrganizationModal() {
  const [show, setShow] = useState(false);
  const handleclose = () => setShow(false);
  const handleshow = () => setShow(true);

  const add = () =>{
    alert("done")
  }

  return (
    <>
      <Button
        className="btn btn-primary btn-inline"
        type="submit"
        onClick={handleshow}>
        Add Organization
      </Button>
      <Modal show={show}
       onHide={handleclose} 
       keyboard={false} 
       centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Title>Add Organization</Modal.Title>
        <Modal.Body>
          <label>Organization Name : </label>
          <br></br>
          <input type="text" placeholder="Organization Name"></input>

          <label>Email : </label>
          <br></br>
          <input type="text" placeholder="Email"></input>

          <label>Address : </label>
          <br></br>
          <textarea
            rows="7"
            cols="5"
            placeholder="Organization Name"
          ></textarea>

          <label>Number of User : </label>
          <br></br>
          <input type="text" placeholder=""></input>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={handleclose}>Close</Button>
            <Button onClick={add}></Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
