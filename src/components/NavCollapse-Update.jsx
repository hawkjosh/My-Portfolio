import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function navCollapse() {
  return (
    <section className="navbar container" id="navCollapse">

      <button className="" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu &nbsp; <FontAwesomeIcon icon="bars" />
      </button>

      <div className="" id="navbarResponsive">
        <ul className="d-flex flex-row">
          <li className="">
            <Link className="" to='/about'>About</Link>
          </li>
          <li className="">
            <Link className="" to='/portfolio'>Portfolio</Link>
          </li>
          <li className="">
            <Link className="" to='/contact'>Contact</Link>
          </li>
          <li className="">
            <a className="" href="https://1drv.ms/b/s!AjbK_Cd8W85egfM7DSjzINlw1ZHZpA" target="_blank" rel="noreferrer">Resume</a>
          </li>
        </ul>
      </div>
      
    </section>
  )
};