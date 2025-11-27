import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyNavbar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/show">TO-DO APPLICATION</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/list">Show List</Nav.Link>
            <Nav.Link as={Link} to="/add">Add</Nav.Link>
            {/* <Nav.Link as={Link} to="/delete">Delete</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default MyNavbar
