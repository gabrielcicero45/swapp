import React, { useState } from 'react';

import {Link} from 'react-router-dom';
import { useAuth } from '../contexts/auth';

export default function Navbar(props) {
  
  const logoImg = require('../assets/logo.png')
  const { signed, Logout} = useAuth();
  const {authorized} = props
  const logout_user = () => {
    Logout()
    window.location.href = '/login'
  };

  const guestLinks = () => (
      <>
        <Link className='btn btn-outline-light'  to='/login'>Login</Link>
        <Link className='btn btn-light' to='/signup'>Cadastre-se</Link>
      </>
  );

  const authLinks = () => (
    <>
      <Link className='btn btn-outline-light'  to='/people'>People</Link>
      <Link className='btn btn-outline-light'  to='/starships'>Starships</Link>
      <div className='menu-item'>
          <a className='btn btn-light' href='#!' onClick={logout_user}>Logout</a>
      </div>
    </>
      
  );
  return (
    <nav className="navbar">
        <div className="container-fluid">
        <Link to={'/'}><img alt="pokeapi-logo" src={logoImg} className="navbar-img" /></Link>
        
        {authorized ? authLinks() : guestLinks()}
        </div>
    </nav>
  )
}




  

  
      
       


