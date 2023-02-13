import React, { useState,useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

export default function OrganizationModal() {
  const [show, setShow] = useState(false);
  const handleclose = () => setShow(false);
  const handleshow = () => setShow(true);
  const [nameerror, name_error] = useState('');
  const [emailerror, email_error] = useState('');
  //const [num_error, numerror] = useState('');



const initialValues = {
  orgname : "",
  email : "",
  address  : "",
  user : "",
};
const[finalORG,Setorg]=useState(initialValues);

const handleInputChange = (e) =>{
  const {name,value} = e.target;
  Setorg({...finalORG,[name]:value})
}
const add = () => {
  alert(finalORG.orgname)
};

// validation part form form starting
useEffect(() => {
  const name_pattern = /[A-Z][A-Z\d]+/;    
  if (finalORG.orgname === "") 
  {
      name_error("");
  } 
  else
   {
      if (!finalORG.orgname.match(name_pattern)) {
          name_error("Error found in org name");
      }
      else
       {
          name_error("");
      }
  }

}, [finalORG.orgname])

useEffect(() => {
  const email_pattern = /^[A-Za-z0-9+_.-]+@(.+)$/;

    if (finalORG.email === "") 
    {
        email_error("");
    } 
    else
     {
        if (!finalORG.email.match(email_pattern)) {
            email_error("Error found in email");
        }
        else
         {
            email_error("");
        }
    }

}, [finalORG.email])


// useEffect(() => {      
//     const num_patt = /^(0|91)?[6-9][0-9]{9}$/;
//       if (usernumber === "") 
//       {
//           numerror("");
//       } 
//       else
//        {
//           if (!usernumber.match(num_patt)) {
//               numerror("Error found in number");
//           }
//           else
//            {
//               numerror("");
//           }
//       }
  
//   }, [usernumber])

// validation part ending

 

  return (
    <>
      <Button
        className="btn btn-primary btn-inline"
        type="submit"
        onClick={handleshow}
      >
        Add Organization
      </Button>
      <Modal show={show} onHide={handleclose} keyboard={true} centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Title>Add Organization</Modal.Title>
        <Modal.Body>
          <label>Organization Name : </label>
          <br></br>
          <input 
             name="orgname"
             value={finalORG.orgname}
            onChange={handleInputChange}
            type="text"
            placeholder="Organization Name"
          ></input>{" "}<p className="bg-danger">{nameerror}</p>
          <br></br>
          <label>Email : </label>
          <br></br>
          <input 
          name="email"
          onChange={handleInputChange}
           value={finalORG.email}
            type="text"
            placeholder="Email"
          ></input>{" "}<p className="bg-danger">{emailerror}</p>
          <br></br>
          <label>Address : </label>
          <br></br>
          <textarea 
          name="address"
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
          name="user"
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
