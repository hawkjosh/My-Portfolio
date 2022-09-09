import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavCollapse from '../components/NavCollapse.jsx';

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
      <div className="container d-flex justify-content-evenly align-items-center flex-wrap">
        <Link className="" to='/My-Portfolio'>
          <a className="navbar-brand text-white mx-3" href="mainNav"><FontAwesomeIcon className="text-primary" icon="square-h" />&nbsp; The Hawk's Nest</a>
        </Link>
        <div className="mt-2">
        <NavCollapse />
        </div>
      </div>
    </nav>
  )
};