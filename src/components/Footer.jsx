import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
    <footer className="footer d-flex flex-row justify-content-center">
      <div className="d-flex justify-content-between">
          <div className="container align-items-center">
            <a className="btn btn-outline-light btn-social" href="https://www.linkedin.com/in/josh-hawk-6591a3230/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon="fab fa-fw fa-linkedin-in" />
            </a>
          </div>
          <div className="container align-items-center mx-5">
            <a className="btn btn-outline-light btn-social" href="https://github.com/hawkjosh" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon="fab fa-fw fa-github" />
            </a>
          </div>
          <div className="container align-items-center">
            <a className="btn btn-outline-light btn-social" href="https://stackoverflow.com/users/19513873/hawkjosh?tab=profile" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon="fab fa-fw fa-stack-overflow" />
            </a>
          </div>
      </div>
    </footer>
  )
};