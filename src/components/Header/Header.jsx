import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="md" bg="light" variant="light">
          
          <Nav className="mx-auto">
              <Navbar.Brand>Chinese Cuisine</Navbar.Brand>
              <Link className='nav-link' to='/'>Home</Link>
              <Link className='nav-link' to='/Blog'>Blog</Link>
              <Link className='nav-link' to='/login'>Log in</Link>
              <Link className='nav-link' to='/signup'>Sign up</Link>
           
          </Nav>
        </Navbar>
      </>
    );
};

export default Header;