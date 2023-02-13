import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Icon from '../assets/Icon1.jpg';
import '../CSS/superadmin.css'
import '../CSS/admin.css'

export default function Admin() {
  return (
    <>
      <div>

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <img src={Icon} className="Icon"></img>
          <Container>

            <Navbar.Brand href="#home"> Admin</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features"> Property</Nav.Link>
                <Nav.Link href="#pricing">Tenant</Nav.Link>
                <Nav.Link href="#pricing">User</Nav.Link>

              </Nav>
              <Nav>
                <NavDropdown title="DEV" id="collasible-nav-dropdown">

                  <NavDropdown.Item href="#action/3.4">
                    Change Password
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    LogOut
                  </NavDropdown.Item>
                </NavDropdown>


              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </div>
      <div class="sidebar">
        <a href="#home">JAN</a>
        <a href="#news">FEB<span className='month_count '>12</span></a>
        <a href="#contact">MAR<span className='month_count'>12</span></a>
        <a href="#about">APR<span className='month_count'>12</span></a>
        <a href="#about">MAY<span className='month_count'>12</span></a>
        <a href="#about">JUN<span className='month_count'>12</span></a>
        <a href="#about">JUL<span className='month_count'>12</span></a>
        <a href="#about">AUG<span className='month_count'>12</span></a>
        <a href="#about">SEP<span className='month_count'>12</span></a>
        <a href="#about">OCT<span className='month_count'>12</span></a>
        <a href="#about">NOV<span className='month_count'>12</span></a>
        <a href="#about">DEC<span className='month_count'>12</span></a>
      </div>
      <div className="container ">
        

        <div class="card-columns ">
          <div class="card bg-light card">
            <div class="card-body text-center">
              <p class="card-text">a</p>
            </div>
          </div>
          <div class="card bg-light card">
            <div class="card-body text-center">
              <p class="card-text">b</p>
            </div>
          </div>



          <div class="card bg-light card">
            <div class="card-body text-center">
              <p class="card-text">c</p>
            </div>
          </div>
          <div class="card bg-light card">
            <div class="card-body text-center">
              <p class="card-text">d</p>
            </div>
          </div>


        </div>
      </div>


      {/* <div class="content">
        <h2>hai</h2>
        <p>hello.</p>
        <p>manipal</p>
        <h3>Welcome.</h3>
    </div> */}
    </>

  )
}
