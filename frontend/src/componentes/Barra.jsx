import React, {  useState, useEffect } from 'react';
import { Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Barra() {
    const [show, setShow] = useState(true)
    const [opcionRegistro, setOpcionRegistro] = useState(false)
    const [menu,setMenu] = useState(false)



    useEffect(() => {
        
        if(sessionStorage.getItem('token')){
            setMenu(true)
            setShow(false)
            setOpcionRegistro(true)
        }

        
    }, []);

    const salir=()=>{

        sessionStorage.clear()
        window.location.href="/"

    }



    return (
        <div>
            <Navbar bg="success" variant="dark" expand={show}>
                <Container fluid>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Link hidden={opcionRegistro} style={{ color:'#FFF', textDecoration:'none'}} to="/registrarPropietario" > <i className='fas fa-user-plus'></i> <Navbar.Brand> Regístrate</Navbar.Brand></Link>
                    
                    <Navbar.Brand hidden={show} href="#"><i class="fas fa-user-md"></i> Bienvenido: {sessionStorage.getItem('nombre')}</Navbar.Brand> 

                    <Navbar.Brand href="#"></Navbar.Brand> 
                    <Navbar.Brand href="#"></Navbar.Brand>
                    <Navbar.Brand href="#"></Navbar.Brand> 

                    <Navbar.Brand hidden={show} href="#" onClick={()=>salir()} to="/"><i class="fas fa-user"></i> Cerrar sesión</Navbar.Brand>  

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
                        <Button variant="outline-success">Buscar</Button>
                        </Form>
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    )
}
