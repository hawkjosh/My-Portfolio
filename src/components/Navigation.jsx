import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavCollapse from '../components/NavCollapse.jsx';

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
      <div className="container">
        <Link to='/' >
          <a className="navbar-brand text-white" href="mainNav"><FontAwesomeIcon className="text-primary" icon="square-h" />&nbsp; The Hawk's Nest</a>
        </Link>

        <NavCollapse />

      </div>
    </nav>
  )
};