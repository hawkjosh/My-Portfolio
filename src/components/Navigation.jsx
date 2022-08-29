import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavCollapse from '../components/NavCollapse.jsx';

export default function Navigation() {
  return (
    <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
      <div class="container">
        <Link to='/' >
          <a class="navbar-brand" href="mainNav"><FontAwesomeIcon icon="square-h" className="text-primary" />&nbsp; The Hawk's Nest</a>
        </Link>

        <NavCollapse />

      </div>
    </nav>
  )
};