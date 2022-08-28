import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.png';
import NavCollapse from '../components/NavCollapse.jsx';

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top d-flex flex-column justify-content-between align-items-center" id="mainNav">
      <div className="d-flex justify-content-between align-items-center">
        <Link className="container navbar-brand align-self-start align-content-center" to='/'>
          <img className="img-fluid h-auto" src={Logo} alt="Logo"/>
        </Link>
        <NavCollapse />
      </div>
    </nav>
  )
};