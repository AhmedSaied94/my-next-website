import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import styles from "../styles/Navbar.module.css";

const NavBar = () => {
  return (
    <Navbar className={`fixed-top p-3`} bg="white" expand="lg">
      <Container>
        <Navbar.Brand className="align-self-center" href="#main">
          <div
            className={`${styles.brandCon} d-flex justify-content-center align-items-center bg-light rounded-circle`}
          >
            <h6 className={`${styles.brandTxt} fw-bold m-0`}>AS</h6>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="mx-md-3 align-self-lg-center" href="#main">
              Home
            </Nav.Link>
            <Nav.Link className="mx-md-3 align-self-lg-center" href="#services">
              Services
            </Nav.Link>
            <Nav.Link className="mx-md-3 align-self-lg-center" href="#works">
              Works
            </Nav.Link>
            <Nav.Link className="mx-md-3 align-self-lg-center" href="#main">
              About
            </Nav.Link>
            <Nav.Link className="ms-md-3 " href="#contactme">
              <Button
                className={`${styles.navBtn} px-4 py-1  fs-6`}
                variant="outline-primary"
                color="#3730A3"
                size="sm"
              >
                Hire me
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
