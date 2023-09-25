import React, { useContext } from 'react';
import './Header.css';


import { Link } from "react-router-dom";
import ActiveLink from '../ActiveLink/ActiveLink';
import { AuthContext } from '../../providers/AuthProvider';
import { signedout } from '../LogIn/LogIn';
import logo from '../../../public/chinese-utensils-riou.jpg';


const Header = () => {
    const {loggedinuser} = useContext(AuthContext);
    return (
        <>
          <nav className="navbar navbar-expand-sm bg-light navbar-light">
          <div className="container-fluid">
          <img src={logo} className='w-logo mx-md-2' />
          <ActiveLink className="navbar-brand" to=""><h2 className='m-0'><strong>Taste of China</strong></h2></ActiveLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav ms-auto">
          <li className="nav-item">
          <ActiveLink className='nav-link' to='/'>Home</ActiveLink>
          </li>
          <li className="nav-item">
          <ActiveLink className='nav-link' to='/blog'>Blog</ActiveLink>
          </li>
          <li className="nav-item">
          <ActiveLink className='nav-link' to='/protected'>Protected</ActiveLink>
          </li>
          
          {loggedinuser ? <><li className="nav-item"><Link className='nav-link' onClick={signedout}>Log out</Link></li><li className="nav-item"><img title={loggedinuser?.displayName} src={loggedinuser.photoURL} className='w-fix rounded-circle ms-1' /></li></>:<li className="nav-item"><ActiveLink className='nav-link' to='/login'>Login</ActiveLink></li>}
          
          </ul>
      
          </div>
          </div>
          </nav>
          
      </>
    );
};

export default Header;