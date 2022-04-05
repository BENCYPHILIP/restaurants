import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

 const Header = () => {
  return (
  
  <Navbar variant="dark" sticky="top" style={{backgroundColor: '#8a2b06'}} >
    <Container>
    <Navbar.Brand href="#home"><h3>Restaurant</h3></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  )
}

export default Header;