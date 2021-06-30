import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


function Header (){

    return(
        <Navbar className="px-5 " collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Siddhant</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link >HOME</Nav.Link>
            <Nav.Link >ABOUT</Nav.Link>
            <Nav.Link >PROJECTS</Nav.Link>
            <Nav.Link >SKILLS</Nav.Link>
            <Nav.Link >CONTACT</Nav.Link>
          </Nav>
        
        </Navbar.Collapse>
      </Navbar>
    )
}

export default Header