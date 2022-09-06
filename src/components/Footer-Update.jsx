import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Stack from 'react-bootstrap/Stack';

export default function Footer() {
  return (
    <section className="fixed-bottom" id="footer">
        {/* <Stack direction="horizontal"> */}
        <Stack>
          <div className="">
            <a className="" href="https://www.linkedin.com/in/josh-hawk-6591a3230/" target="_blank" rel="noreferrer">
              {/* <FontAwesomeIcon icon="fab fa-fw fa-linkedin-in" style={{height: "80%"}} /> */}
              <FontAwesomeIcon icon="fab fa-fw fa-linkedin-in" />
            </a>
          </div>
          <div className="">
            <a className="" href="https://github.com/hawkjosh" target="_blank" rel="noreferrer">
              {/* <FontAwesomeIcon icon="fab fa-fw fa-github" style={{height: "100%"}} /> */}
              <FontAwesomeIcon icon="fab fa-fw fa-github" />
            </a>
          </div>
          <div className="">
            <a className="" href="https://stackoverflow.com/users/19513873/hawkjosh?tab=profile" target="_blank" rel="noreferrer">
              {/* <FontAwesomeIcon icon="fab fa-fw fa-stack-overflow" style={{height: "90%"}} /> */}
              <FontAwesomeIcon icon="fab fa-fw fa-stack-overflow" />
            </a>
          </div>
        </Stack>
    </section>
  )
};