import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


function Header (){

    return(
    <>        
        <Navbar className="px-4 py-3" collapseOnSelect expand="sm" variant="dark" style={{backgroundColor:"#283149"}} >
        <Navbar.Brand href="#home" style={{fontFamily:"cursive", color:"#DBEDF3", fontSize:"22px"}}>Siddhant Deshmukh</Navbar.Brand>
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
    </>
    )
}

export default Header