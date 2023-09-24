import React, { useContext } from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import ActiveLink from '../ActiveLink/ActiveLink';
import { AuthContext } from '../../providers/AuthProvider';
import { signedout } from '../LogIn/LogIn';


const Header = () => {
    const {loggedinuser} = useContext(AuthContext);
    return (
        <>
        <Navbar className='nav-p' collapseOnSelect expand="md" bg="light" variant="light">
        
          <Nav className="">
          <Navbar.Brand>Taste of China</Navbar.Brand>
              <ActiveLink className='nav-link' to='/'>Home</ActiveLink>
              <ActiveLink className='nav-link' to='/blog'>Blog</ActiveLink>
              
              
              <ActiveLink className='nav-link' to='/protected'>Protected</ActiveLink>
              {loggedinuser ? <><Link className='nav-link' onClick={signedout}>Log out</Link><img title={loggedinuser?.displayName} src={loggedinuser.photoURL} className='w-fix rounded-circle ms-1' /></>:<ActiveLink className='nav-link' to='/login'>Login</ActiveLink>}
          </Nav>
        </Navbar>
      </>
    );
};

export default Header;