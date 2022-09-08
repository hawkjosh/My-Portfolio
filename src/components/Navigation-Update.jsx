import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavCollapse from '../components/NavCollapse.jsx';

export default function Navigation() {
  return (
    <section className="navbar fixed-top text-white text-decoration-none" id="mainNav">
      <div className="">
        <Link to='/My-Portfolio' >
          <a className="fs-1 text-uppercase" href="mainNav"><FontAwesomeIcon icon="square-h" />&nbsp; The Hawk's Nest</a>
        </Link>
      </div>
      <div className="">
        <NavCollapse />
      </div>
    </section>
  )
};