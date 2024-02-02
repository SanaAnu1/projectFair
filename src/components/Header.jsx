import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header({insideDashBoard}) {
  return (
    <div  >
      <Navbar style={{backgroundColor:'#7ccc7c',position:'fixed',top:'0px',zIndex:1}} className='p-3 ps-5 w-100' expand="lg" >
      <Container>
        <Navbar.Brand href="#home"><Link to={'/'} style={{textDecoration:'none'}}>
                <h2 className='text-white'><i style={{height:'25px'}} className="fa-solid fa-laptop-code fa-bounce me-2 "></i><b>Project Fair</b></h2></Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {
            insideDashBoard&&
            <Nav className="ms-auto">
            <Nav.Link style={{textDecoration:'none'}} className='btn btn-link text-light fw-bolder'><i className='fa-solid fa-gear me-1'></i> Log Out</Nav.Link>
          </Nav>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </div>
  )
}

export default Header