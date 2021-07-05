import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function Header() {
  return (
    <>
      <Navbar
        className="px-4 py-3"
        collapseOnSelect
        expand="md"
        variant="dark"
        style={{ backgroundColor: "#070D59" }}
      >
        <Navbar.Brand
          href="#home"
          style={{ fontFamily: "cursive", color: "#DBEDF3", fontSize: "22px" }}
        >
          Siddhant Deshmukh
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link className="navlink" to="/">
              <Nav>HOME</Nav>
            </Link>
            <Link className="navlink" to="/about">
              <Nav>ABOUT</Nav>
            </Link>
            <Link className="navlink" to="/projects">
              <Nav>PROJECTS</Nav>
            </Link>
            <Link className="navlink" to="/skills">
              <Nav>SKILLS</Nav>
            </Link>
            <Link className="navlink" to="/contact">
              <Nav>CONTACT</Nav>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
