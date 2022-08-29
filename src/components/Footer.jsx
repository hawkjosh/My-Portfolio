import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Stack from 'react-bootstrap/Stack';

export default function Footer() {
  return (
    <footer className="footer text-center">
      <div className="container">
        <Stack direction="horizontal">
          <div className="container col-lg-4">
            <a className="btn btn-outline-light btn-social" href="https://www.linkedin.com/in/josh-hawk-6591a3230/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon="fab fa-fw fa-linkedin-in" style={{height: "80%"}} />
            </a>
          </div>
          <div className="container col-lg-4">
            <a className="btn btn-outline-light btn-social" href="https://github.com/hawkjosh" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon="fab fa-fw fa-github" style={{height: "100%"}} />
            </a>
          </div>
          <div className="container col-lg-4">
            <a className="btn btn-outline-light btn-social" href="https://stackoverflow.com/users/19513873/hawkjosh?tab=profile" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon="fab fa-fw fa-stack-overflow" style={{height: "90%"}} />
            </a>
          </div>
        </Stack>
      </div>
    </footer>
  )
};