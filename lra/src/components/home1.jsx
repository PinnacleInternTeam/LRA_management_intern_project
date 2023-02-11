import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Home1()
 {
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
        <div>

            {/* <div>Admin</div>
           <button className='btn btn-danger' onClick={logout}>Logout</button> */}

            {/* nav bar starting */}



            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Super Admin</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Organization</Nav.Link>
                            <Nav.Link href="#pricing">User</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes" className=''>
                                Logout
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* nav bar ending */}
             {/* side bar starting */}
            {/* side Bar start */}

            <header>
                <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top">

                    <div className="container-fluid">

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#sidebarMenu"
                            aria-controls="sidebarMenu"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i className="fas fa-bars"></i>
                        </button>


                        <a className="navbar-brand" href="#">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                                height="25"
                                alt="MDB Logo"
                                loading="lazy"
                            />
                        </a>

                        <form className="d-none d-md-flex input-group w-auto my-auto">
                            <input
                                autocomplete="off"
                                type="search"
                                className="form-control rounded"
                                placeholder='Search (ctrl + "/" to focus)'
                                //style="min-width: 225px;"
                            />
                            <span className="input-group-text border-0"><i className="fas fa-search"></i></span>
                        </form>


                        <ul className="navbar-nav ms-auto d-flex flex-row">

                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                                    href="#"
                                    id="navbarDropdownMenuLink"
                                    role="button"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="fas fa-bell"></i>
                                    <span className="badge rounded-pill badge-notification bg-danger">1</span>
                                </a>
                                <ul
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="navbarDropdownMenuLink"
                                >
                                    <li>
                                        <a className="dropdown-item" href="#">Some news</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Another news</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </li>
                                </ul>
                            </li>


                            <li className="nav-item">
                                <a className="nav-link me-3 me-lg-0" href="#">
                                    <i className="fas fa-fill-drip"></i>
                                </a>
                            </li>
                            <li className="nav-item me-3 me-lg-0">
                                <a className="nav-link" href="#">
                                    <i className="fab fa-github"></i>
                                </a>
                            </li>


                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="flag-united-kingdom flag m-0"></i>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a className="dropdown-item" href="#"
                                        ><i className="flag-united-kingdom flag"></i>English
                                            <i className="fa fa-check text-success ms-2"></i
                                            ></a>
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                        <a className="dropdown-item" href="#"><i className="flag-poland flag"></i>Polski</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#"><i className="flag-china flag"></i>中文</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#"><i className="flag-japan flag"></i>日本語</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#"><i className="flag-germany flag"></i>Deutsch</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#"><i className="flag-france flag"></i>Français</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#"><i className="flag-spain flag"></i>Español</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#"><i className="flag-russia flag"></i>Русский</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#"><i className="flag-portugal flag"></i>Português</a>
                                    </li>
                                </ul>
                            </li>


                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                                    href="#"
                                    id="navbarDropdownMenuLink"
                                    role="button"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                                        className="rounded-circle"
                                        height="22"
                                        alt="Avatar"
                                        loading="lazy"
                                    />
                                </a>
                                <ul
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="navbarDropdownMenuLink"
                                >
                                    <li>
                                        <a className="dropdown-item" href="#">My profile</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Settings</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Logout</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>

            </header>

            <main >
                <div className="container pt-4"></div>
            </main>


            {/* side bar end */}


             {/* side bar ending */}
        </div>


    )
}
