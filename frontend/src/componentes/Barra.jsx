import React from 'react';
import { Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

export default function Barra() {
    return (
        <div>
            <Navbar bg="success" variant="dark" expand={false}>
                <Container fluid>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    
                    <Navbar.Brand href="#">Bienvenido: Keny</Navbar.Brand> 
                    <Navbar.Brand href="#"></Navbar.Brand> 
                    <Navbar.Brand href="#"></Navbar.Brand> 
                    <Navbar.Brand href="#"></Navbar.Brand> 
                    <Navbar.Brand href="#">Cerrar sesión</Navbar.Brand>  

                    <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="start"
                    >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Opciones</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">

                        <NavDropdown title="Registro" id="offcanvasNavbarDropdown">
                            <NavDropdown.Item href="/registrarpropietario">Registrar propietario</NavDropdown.Item>
                            <NavDropdown.Item href="/registrarmascota">Registrar mascota</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Reporte" id="offcanvasNavbarDropdown">
                            <NavDropdown.Item href="/verpropietario">Ver propietarios</NavDropdown.Item>
                            <NavDropdown.Item href="/vermascotas">Ver mascotas</NavDropdown.Item>
                        </NavDropdown>

                        </Nav>
                        <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                        </Form>
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    )
}
