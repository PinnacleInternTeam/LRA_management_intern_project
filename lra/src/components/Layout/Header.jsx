import React from 'react'
//  import Icon from '../assets/icon.jpg';
//  import Icon from './src/assets/Icon1.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {
  return (
    <div>
        hii

        <div>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    {/* <img src={Icon} className="Icon"></img> */}
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



      
    </div>
  )
}
