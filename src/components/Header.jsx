import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import myAvatar from '../assets/img/my_avataaars.svg';
import Stack from 'react-bootstrap/Stack';

export default function Header() {
  return (
    <header className="masthead page-section bg-primary text-white text-center m-auto">
      <div className="container d-flex align-items-center flex-column">
        <img className="masthead-avatar mb-3" src={myAvatar} alt="Josh Hawk Avatar" />

        <h1 className="masthead-heading text-uppercase">Josh Hawk</h1>

        <div className="divider-custom divider-light mb-5">
          <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <FontAwesomeIcon icon="fa-regular fa-star" />
            </div>
          <div className="divider-custom-line"></div>
        </div>
        
        <div className="masthead-subheading font-weight-light mb-0">
          <Stack direction="horizontal" gap={5}>
            <div className="d-flex flex-row flex-wrap align-items-center justify-content-center">
              Emerging Developer &nbsp; <FontAwesomeIcon icon="laptop-code" style={{color: "#2c3e50"}} />
            </div>
            <div className="d-flex flex-row flex-wrap align-items-center justify-content-center">
              Super Dad / Pretty Good Husband &nbsp; <FontAwesomeIcon icon="people-roof" style={{color: "#2c3e50"}} />
            </div>
            <div className="d-flex flex-row flex-wrap align-items-center justify-content-center">
              Lifetime Braves Fan &nbsp; <FontAwesomeIcon icon="baseball-bat-ball" style={{color: "#2c3e50"}} />
            </div>
          </Stack>
        </div>
      </div>
    </header>
  )
};