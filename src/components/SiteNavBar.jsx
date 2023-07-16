import Link from "next/link";
import { useState } from "react";
import { Navbar, Container, Nav, Button, Modal } from "react-bootstrap";
import logo from "../../src/resources/logo.png";
import { Login } from "../components/Login.jsx"
import { logout } from "../services/login-service";

export const SiteNavBar = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //const valid = localStorage.getItem("user-id");
  const valid = false;

  return (
    <>
    <Navbar expand="lg"  className="bg-body-tertiary " sticky="top">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Copán
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="underline" className="ml-auto">
            <Link href={'/noticias'} className="nav-link">Noticias</Link>
            <Link href={'/contacto'} className="nav-link">Contacto</Link>
            <Link href={'/recursos'} className="nav-link">Recursos</Link>
            <Link href={'/sitios'} className="nav-link">Sitios de Interés</Link>
            {
              valid ? 
              <Button variant="danger" onClick={logout}><i className="bi bi-door-open-fill"></i>Cerrar Sesión</Button>
              : <Button variant="warning" onClick={handleShow}><i className="bi bi-door-open-fill"></i>Gestión</Button>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Modal show={show} onHide={handleClose}>
      <Login />
    </Modal>
    </>
  );
};
