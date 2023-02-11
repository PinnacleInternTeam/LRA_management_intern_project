import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Icon from '../assets/Icon1.jpg';
import '../components/CSS/home1.css'

export default function Home1() {
    let navigate = useNavigate();
    let aut = localStorage.getItem("authenticated")
    console.log(aut);
    if (!aut) {
        navigate('/Login');
        localStorage.setItem("authenticated", false);
    }
    const logout = () => {
        navigate('/Login');
        localStorage.setItem("authenticated", false);
    }
    return (
        <>
            <div>

                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <img src={Icon} className="Icon"></img>
                    <Container>

                        <Navbar.Brand href="#home">Super Admin</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#features">Organization</Nav.Link>
                                <Nav.Link href="#pricing">User</Nav.Link>

                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets">LogOut</Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>
            <div class="sidebar">
                <a class="active" href="#home">JAN</a>
                <a href="#news">FEB</a>
                <a href="#contact">MAR</a>
                <a href="#about">APR</a>
                <a href="#about">MAY</a>
                <a href="#about">JUN</a>
                <a href="#about">JUL</a>
                <a href="#about">AUG</a>
                <a href="#about">SEP</a>
                <a href="#about">OCT</a>
                <a href="#about">NOV</a>
                <a href="#about">DEC</a>
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
