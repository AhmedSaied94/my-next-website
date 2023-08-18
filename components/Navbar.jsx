import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
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
            <Link href="/#main" >
              < a className="mx-md-3 align-self-lg-center nav-link" >
              Home
              </a>
            </Link>
            <Link href="/#services" >
              < a className="mx-md-3 align-self-lg-center nav-link" >
              Services
              </a>
            </Link>
            <Link href="/#works" >
              < a className="mx-md-3 align-self-lg-center nav-link" >
              Works
              </a>
            </Link>
            {/* <Link href="/#about" >
              < a className="mx-md-3 align-self-lg-center nav-link" >
              About
              </a>
            </Link> */}
            <Link href="/#contactme" >
              <Button
                className={`${styles.navBtn} px-4 py-1  fs-6`}
                variant="outline-primary"
                color="#3730A3"
                size="sm"
              >
                Hire me
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
