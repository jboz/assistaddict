import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      {/* <div id="logo-yeux" className="col-md-12">
        <img className="img-responsive center-block" alt="Acceuil téléphonique" src={yeux} data-holder-rendered="true" />
      </div> */}
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Assist' Addict</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home">Accueil</Nav.Link>
            <Nav.Link href="#presentation">Presentation</Nav.Link>
            <Nav.Link href="#features">Prestations</Nav.Link>
            <Nav.Link href="#tariffs">Tarifs</Nav.Link>
            <Nav.Link href="#about">A propos</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
