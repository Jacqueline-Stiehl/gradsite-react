//modeled after react portfolio
import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../../src/App.css"

function Header () {
  const currentPath = location.pathname;
  
    return (
      <header className="header">
        <h1>
          <span className="dot" id="red"></span> THE 
          <span className="dot" id="yellow"></span> ONE 
          <span className="dot" id="blue"></span> WHERE 
          <span className="dot" id="red"></span> DANIKA 
          <span className="dot" id="yellow"></span> GRADUATES 
          <span className="dot" id="blue"></span>
        </h1>
        {/* <br/> */}
        <h1>
          <span className="dot" id="red"></span> CLASS
          <span className="dot" id="yellow"></span> OF
          <span className="dot" id="blue"></span> 2024
          <span className="dot" id="red"></span>
        </h1>   

        <Navbar bg="dark" variant="dark" expand="sm">
          <Container fluid>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
               </Nav>
            {/* Right-side Nav Options */}
               <Nav>
                <>
                {currentPath !== "/home" && (
                    <Nav.Link href="/home" className="navlink2">Home</Nav.Link>
                  )}
                  {currentPath !== "/schoolPics" && (
                    <Nav.Link href="/schoolPics" className="navlink3">School Pictures</Nav.Link>
                  )}
                  {currentPath !== "/SeniorPics" && (
                    <Nav.Link href="/SeniorPics" className="navlink5">Senior Pictures</Nav.Link>
                  )}
                  {currentPath !== "/favorites" && (
                    <Nav.Link href="/favorites" className="navlink4" style={{ whiteSpace: "nowrap" }}>Favorites</Nav.Link>
                  )}
                  {currentPath !== "/Messages" && (
                    <Nav.Link href="/Messages" className="navlink3">Messages</Nav.Link>
                  )}
                </>
               </Nav>
              </Navbar.Collapse>
           </Container>
        </Navbar>
      </header>
    );
  };
  
  export default Header;
  