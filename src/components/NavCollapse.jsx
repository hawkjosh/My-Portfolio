import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function navCollapse() {
  return (
    <div>
      <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu &nbsp; <FontAwesomeIcon icon="bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item mx-0 mx-lg-1">
            <Link className="nav-link py-3 px-0 px-lg-3 rounded" to='/about'>About</Link>
          </li>
          <li className="nav-item mx-0 mx-lg-1">
            <Link className="nav-link py-3 px-0 px-lg-3 rounded" to='/portfolio'>Portfolio</Link>
          </li>
          <li className="nav-item mx-0 mx-lg-1">
            <Link className="nav-link py-3 px-0 px-lg-3 rounded" to='/contact'>Contact</Link>
          </li>
          <li className="nav-item mx-0 mx-lg-1">
            <a className="nav-link py-3 px-0 px-lg-3 rounded" href="https://1drv.ms/b/s!AjbK_Cd8W85egfM7DSjzINlw1ZHZpA" target="_blank" rel="noreferrer">Resume</a>
          </li>
        </ul>
      </div>
    </div>
  )
};