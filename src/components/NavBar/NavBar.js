"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./NavBar.css"
import Link from 'next/link';
import SideCart from '../SideCart/SideCart';
import { useState } from 'react';
import LoginModal from '../LoginModal/LoginModal';
import CategorySelect from '../CategorySelect/CategorySelect';

function NavBar({categories = []}) {

    const [showSideCart, setShowSideCart] = useState(false)
    const [showLogin, setShowLogin] = useState(false)

    const handleHide = () => setShowSideCart(false);
    const handleCloseLogin = () => setShowLogin(false);
    return (
        <>
            <Navbar sticky='top' expand="md" bg='dark' data-bs-theme="dark" className="bg-body-tertiary navbar-main ">
                <Container fluid className='items-center'>
                    <Navbar.Brand style={{ fontSize: "inherit" }} href="/">ZEPPA ELEKTRONIKA</Navbar.Brand>
                    <div className='grow'></div>

                    <Form className="nav-search-form">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                    </Form>
                    <Nav className='small-cart-btn'>
                        <Nav.Link className='text-lg mx-3' onClick={() => setShowSideCart(true)}>
                            <FontAwesomeIcon size='large' icon={faShoppingCart} />
                        </Nav.Link>
                    </Nav>
                    <Nav className="nav-links justify-content-end flex-grow-1 pe-3">
                        <Link className='nav-link' href="/" passHref>
                            Naslovna
                        </Link>
                        <NavDropdown
                            title="Proizvodi"
                            id={`offcanvasNavbarDropdown-expand-md`}
                        >
                            <CategorySelect categories={categories}></CategorySelect>
                        </NavDropdown>
                        <Link className='nav-link' href="/about" passHref>O Nama</Link>
                        {/* <Link className='nav-link' href="/contact" passHref>Kontakt</Link> */}
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Pretraga"
                                className="me-2"
                                aria-label="Search"
                            />
                        </Form>
                        {/* <Button className="me-2" variant='outline-primary'>Sing In</Button>
                        <Button className="me-2" onClick={() => setShowLogin(true)}>Log In</Button> */}
                        <Nav.Link onClick={() => setShowSideCart(true)}>
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </Nav.Link>
                    </Nav>

                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-md`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                        placement="end"
                        className="nav-offcanvas"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title className='flex flex-nowrap w-5/6' id={`offcanvasNavbarLabel-expand-md`}>
                                Zeppa
                                <div className='grow'></div>
                                {/* <Button className="me-2" variant='outline-primary'>Sing In</Button>
                                <Button className="me-2" onClick={() => setShowLogin(true)}>Log In</Button> */}
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Link className='nav-link' href="/home" passHref>
                                    Naslovna
                                </Link>
                                <NavDropdown
                                    title="Proizvodi"
                                    id={`offcanvasNavbarDropdown-expand-md`}
                                >
                                <CategorySelect categories={categories}></CategorySelect>
                                    {/* {RenderProducts()} */}
                                </NavDropdown>
                                <Link className='nav-link' href="/about" passHref>O Nama</Link>
                                <Link className='nav-link' href="/contact" passHref>Kontakt</Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>

                </Container>
            </Navbar>
            <LoginModal onClose={handleCloseLogin} show={showLogin}></LoginModal>
            <SideCart show={showSideCart} handleClose={handleHide}></SideCart>
        </>
    );
}

export default NavBar;