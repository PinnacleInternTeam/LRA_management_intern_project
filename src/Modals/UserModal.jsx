import React, { useState } from "react";
import { Modal, Button} from "react-bootstrap";

export default function UserModal() {
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
        Add User
      </Button>
      <Modal show={show}
       onHide={handleclose} 
       keyboard={false} 
       centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Title>Add User</Modal.Title>
        <Modal.Body>
          <label>User Name : </label>
          <br></br>
          <input type="text" placeholder="Organization Name"></input> <br></br>

          <label>Email : </label>
          <br></br>
          <input type="text" placeholder="Email"></input> <br></br>

          <label>Password : </label>
          <br></br>
          <input type="text" placeholder="Email"></input> <br></br>

          <label> Confirm Password : </label>
          <br></br>
          <input type="text" placeholder="Email"></input> <br></br>

          <label> org belongs </label>
          <br></br>
          <input type="text" placeholder="Email"></input> <br></br>

          <label> Phone Number </label>
          <br></br>
          <input type="text" placeholder="Email"></input> <br></br>


          <label>Address : </label>
          <br></br>
          <textarea
            rows="5"
            cols="20"
            placeholder="Organization Name"
          ></textarea>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={handleclose}>Close</Button>
            <Button onClick={add}></Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
