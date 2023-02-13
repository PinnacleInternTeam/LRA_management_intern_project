import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function OrganizationModal() {
  const [show, setShow] = useState(false);
  const handleclose = () => setShow(false);
  const handleshow = () => setShow(true);


const initialValues = {
  orgname : "",
  email : "",
  address  : "",
  user : "",
};
const[finalORG,Setorg]=useState(initialValues);
const handleInputChange = (e) =>{
  const {finaldata,value} = e.target;
  Setorg({...finalORG,[finaldata]:value})
}



  const add = () => {
    alert("done");
  };

  return (
    <>
      <Button
        className="btn btn-primary btn-inline"
        type="submit"
        onClick={handleshow}
      >
        Add Organization
      </Button>
      <Modal show={show} onHide={handleclose} keyboard={false} centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Title>Add Organization</Modal.Title>
        <Modal.Body>
          <label>Organization Name : </label>
          <br></br>
          <input 
          onChange={handleInputChange}
            value={finalORG.orgname}
            type="text"
            placeholder="Organization Name"
          ></input>{" "}
          <br></br>
          <label>Email : </label>
          <br></br>
          <input 
          onChange={handleInputChange}
           value={finalORG.email}
            type="text"
            placeholder="Email"
          ></input>{" "}
          <br></br>
          <label>Address : </label>
          <br></br>
          <textarea 
          onChange={handleInputChange}
          value={finalORG.address}
            rows="5"
            cols="20"
            placeholder="Organization Name"
          ></textarea>
          <br></br>
          <label>Number of User : </label>
          <br></br>
          <input  
          onChange={handleInputChange}
          value={finalORG.user}
          type="text" 
          placeholder=""></input>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleclose}>Close</Button>
          <Button onClick={add}></Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
