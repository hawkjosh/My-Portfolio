import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

export default function NavCollapse() {
  const [open, setOpen] = useState(false);

  return (
    <div className="container align-items-end align-content-end">
      <Button
        className="navbar-toggler text-uppercase bg-secondary border-primary text-white font-weight-bold rounded"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navItems"
        onClick={() => setOpen(!open)}
        aria-controls="navItems"
        aria-expanded={open}>
          Menu &nbsp; <FontAwesomeIcon icon="bars" />
      </Button>

      <Collapse in={open}>
        <div className="collapse navbar-collapse" id="navItems">
          <ul className="navbar-nav ms-auto">
            <li className="nav-fill nav-item nav-link mx-0 mx-lg-1">
              <Link className="nav-link py-3 px-0 px-lg-3 rounded" to='/about'>About</Link>
            </li>
            <li className="nav-fill nav-item nav-link mx-0 mx-lg-1">
              <Link className="nav-link py-3 px-0 px-lg-3 rounded" to='/portfolio'>Portfolio</Link>
            </li>
            <li className="nav-fill nav-item nav-link mx-0 mx-lg-1">
              <Link className="nav-link py-3 px-0 px-lg-3 rounded" to='/contact'>Contact</Link>
            </li>
            <li className="nav-fill nav-item nav-link mx-0 mx-lg-1">
              <a className="nav-link py-3 px-0 px-lg-3 rounded" href="https://1drv.ms/b/s!AjbK_Cd8W85egfM7DSjzINlw1ZHZpA" target="_blank" rel="noreferrer">Resume</a>
            </li>
          </ul>
        </div>
      </Collapse>
    </div>
  )
};