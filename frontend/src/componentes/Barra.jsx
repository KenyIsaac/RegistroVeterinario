import React from 'react';
import { Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

export default function Barra() {
    return (
        <div>
            <Navbar bg="success" variant="dark" expand={false}>
                <Container fluid>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    
                    <Navbar.Brand href="#"><i class="fas fa-user-md"></i> Bienvenido: Keny</Navbar.Brand> 
                    <Navbar.Brand href="#"></Navbar.Brand> 
                    <Navbar.Brand href="#"></Navbar.Brand> 
                    <Navbar.Brand href="#"></Navbar.Brand> 
                    <Navbar.Brand href="#"><i class="fas fa-user"></i> Cerrar sesión</Navbar.Brand>  

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
                            <NavDropdown.Item href="/registrarpropietario"><i class="fas fa-user-edit"></i> Registrar propietario</NavDropdown.Item>
                            <NavDropdown.Item href="/registrarmascota"><i class="fas fa-folder-open"></i> Registrar mascota</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Reporte" id="offcanvasNavbarDropdown">
                            <NavDropdown.Item href="/verpropietario"><i class="fas fa-id-card-alt"></i> Ver propietarios</NavDropdown.Item>
                            <NavDropdown.Item href="/vermascotas"><i class="fas fa-paw"></i> Ver mascotas</NavDropdown.Item>
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
