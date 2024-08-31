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
import { SSRProvider } from 'react-bootstrap';
import Link from 'next/link';

function NavBar() {



    return (
        <SSRProvider>
            <Navbar sticky='top' expand="md" bg='dark' data-bs-theme="dark" className="bg-body-tertiary navbar-main ">
                <Container fluid>
                    <Navbar.Brand style={{ fontSize: "inherit" }} href="/">ZeppaElectronika</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-md`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                                Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Link href="/admin" passHref>
                                    Admin
                                </Link>
                                <Link href="/home" passHref>
                                   Naslovna
                                </Link>
                                <NavDropdown
                                    title="Proizvodi"
                                    id={`offcanvasNavbarDropdown-expand-md`}
                                >
                                    {/* <CategorySelect onCategoryClick={OnCategoryClick} activeCategory={categoryId} categories={categories}></CategorySelect> */}
                                    {/* {RenderProducts()} */}
                                </NavDropdown>
                                <Nav.Link onClick={() => GoTo("/about")}>O Nama</Nav.Link>
                                <Nav.Link onClick={() => GoTo("/contact")}>Kontakt</Nav.Link>
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                </Form>
                                <Button className="me-2" variant='outline-primary'>Sing In</Button>
                                <Button className="me-2">Log In</Button>
                                <Nav.Link onClick={() => setShowSideCart(true)}>
                                    <FontAwesomeIcon icon={faShoppingCart} />
                                </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>

                </Container>
            </Navbar>
            {/* <SideCart show={showSideCart} handleClose={handleHide}></SideCart> */}
        </SSRProvider>
    );
}

export default NavBar;