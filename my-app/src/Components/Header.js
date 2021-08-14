import React from 'react';
import {Navbar,Container,Nav,NavDropdown,Col,Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends React.Component {

    render(){



        return (

<>
  <Navbar bg="dark" variant="dark" >
    <Container>
    <Navbar.Brand href="#home">ZOO PLANET</Navbar.Brand>
    <Nav 
      className="mr-auto my-2 my-lg-0">
      <Nav.Link href="#home"> Home </Nav.Link>
      <Nav.Link href="#features">Blog</Nav.Link>
      <NavDropdown title="JOIN US " id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Adoption</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Donation</NavDropdown.Item>
        </NavDropdown>
      <Nav.Link href="#pricing"> About Us </Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
        )
    }
}

export default Header;