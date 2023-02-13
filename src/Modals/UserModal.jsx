import React, { useState,useEffect } from "react";
import { Modal, Button} from "react-bootstrap";

export default function UserModal() {
  const [show, setShow] = useState(false);
  const handleclose = () => setShow(false);
  const handleshow = () => setShow(true);
const[nameerror,SetNameError]=useState('');
const[emailerror,SetEmailError]=useState('');
const[numbererror,setNumberError]=useState('');
const[passworderror,SetPasswordError]=useState('');

const initialUserValues = {
  name  :"",
  email : "",
  password : "",
  confirmPassword : "",
  number : "",
  address : "",
  OrgBelongsTo : ""
}

//setting the initial values to the variable finalUserData
  const[finalUSERdata,setdata]=useState(initialUserValues);

  //setting the values to the finalauserData from every input values which will insert data to the respected variable present in initialUserValues
  const handleInputChange = (e)=>{
    const{name,value}=e.target;
    setdata({...finalUSERdata,[name]:value})
  }

//validation part starting 

//validation for username
useEffect(()=>{
  const name_pattern = /[A-Za-z]+/;   
  if(finalUSERdata.name == ""){
    SetNameError("");
  }
    else if(!finalUSERdata.name.match(name_pattern))
     {
             SetNameError("please Enter Name in Letters")
    }
    else{
      SetNameError("");
    }
  },[finalUSERdata.name])


  //validation for email
  useEffect(()=>{
    const email_pattern = /^[a-za-z0-9+_.-]+@(.+)$/;  
    if(finalUSERdata.email == ""){
      SetEmailError("");
    }
      else if(!finalUSERdata.email.match(email_pattern))
       {
               SetEmailError("please Enter a valid Email")
      }
      else{
        SetEmailError("");
      }
    },[finalUSERdata.email])

 //validation for Number
 useEffect(()=>{
  const num_patt = /^(0|91)?[6-9][0-9]{9}$/;
  if(finalUSERdata.number == ""){
    SetNameError("");
  }
    else if(!finalUSERdata.number.match(num_patt))
     {
              setNumberError("please Enter a valid Number")
    }
    else{
      setNumberError("");
    }
  },[finalUSERdata.number])

  //validation for password
 useEffect(()=>{
  const password_pattern = /[0-9]/;
  if(finalUSERdata.password == ""){
    SetPasswordError("");
  }
    else if(!finalUSERdata.password.match(password_pattern))
     {
              SetPasswordError("please Enter a valid Number")
    }
    else{
      SetPasswordError("");
    }
  },[finalUSERdata.password])

//validation part ending

  const add = () =>{
    alert(finalUSERdata.name)
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
          <input 
          name="name"
          value={finalUSERdata.name}
          onChange={handleInputChange}
          type="text" 
          placeholder="Name"></input> <br></br>
          <p className="bg-danger">{nameerror}</p>

          <label>Email : </label>
          <br></br>
          <input 
           name="email"
           value={finalUSERdata.email}
           onChange={handleInputChange}
          type="text" 
          placeholder="Email"></input> <br></br>
           <p className="bg-danger">{emailerror}</p>

          <label>Password : </label>
          <br></br>
          <input 
           name="password"
           value={finalUSERdata.password}
           onChange={handleInputChange}
          type="text" 
          placeholder="Password"></input> <br></br>
           <p className="bg-danger">{passworderror}</p>

          <label> Confirm Password : </label>
          <br></br>
          <input
           name="finalPassword"
           value={finalUSERdata.confirmPassword}
           onChange={handleInputChange} 
          type="text"
          placeholder="Confirm Password"></input> <br></br>

          <label> org belongs </label>
          <br></br>
          <input 
           name="OrgBelongsTo"
           value={finalUSERdata.OrgBelongsTo}
           onChange={handleInputChange}
          type="text" 
          placeholder=""></input> <br></br>

          <label> Phone Number </label>
          <br></br>
          <input 
           name="number"
           value={finalUSERdata.number}
           onChange={handleInputChange}
          type="text" 
          placeholder="Number"></input> <br></br>
           <p className="bg-danger">{numbererror}</p>


          <label>Address : </label>
          <br></br>
          <textarea
           name="address"
           value={finalUSERdata.address}
           onChange={handleInputChange}
            rows="5"
            cols="20"
            placeholder="Address"
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
