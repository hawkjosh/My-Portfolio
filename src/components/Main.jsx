import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import myAvatar from '../assets/img/my_avataaars.svg';
import Stack from 'react-bootstrap/Stack';

export default function Main() {
  return (
    <section className="masthead page-section bg-primary text-white text-center">
      <div className="container d-flex align-items-center flex-column">
        <img className="masthead-avatar mb-4" src={myAvatar} alt="Josh Hawk Avatar" style={{width: "25%", height: "auto"}} />

        <h1 className="masthead-heading text-uppercase mb-2">Josh Hawk</h1>

        <div className="divider-custom divider-light mb-3">
          <div className="divider-custom-line"></div>
            <div className="divider-custom-icon fs-1">
              <FontAwesomeIcon icon="fa-regular fa-star" />
            </div>
          <div className="divider-custom-line"></div>
        </div>
      </div>
      <div className="fs-4 d-flex flex-row justify-content-center align-items-center mt-4">
        {/* <Stack direction="horizontal" gap={5}>
          <Stack className="d-flex flex-row flex-wrap justify-content-around" direction="horizontal" gap={3}>
            <p className="m-0 p-0">Emerging Developer</p>
            <p className="m-0 p-0 text-secondary"><FontAwesomeIcon icon="laptop-code" /></p>
          </Stack>
          <Stack className="d-flex flex-row flex-wrap justify-content-around" direction="horizontal" gap={3}>
            <p className="m-0 p-0">Super Dad/Husband</p>
            <p className="m-0 p-0 text-secondary"><FontAwesomeIcon icon="people-roof" /></p>
          </Stack>
          <Stack className="d-flex flex-row flex-wrap justify-content-around align-items-center" direction="horizontal" gap={3}>
            <p className="m-0 p-0">Lifetime Braves Fan</p>
            <p className="m-0 p-0 text-secondary"><FontAwesomeIcon icon="baseball-bat-ball" /></p>
          </Stack>
        </Stack> */}
          <div className="col-4">
            <p className="">Emerging Developer</p>
            <FontAwesomeIcon className="text-secondary" icon="laptop-code" />
          </div>
          <div className="col-4">
            <p className="">Super Dad/Husband</p>
            <FontAwesomeIcon className="text-secondary" icon="people-roof" />
          </div>
          <div className="col-4">
            <p className="">Lifetime Braves Fan</p>
            <FontAwesomeIcon className="text-secondary" icon="baseball-bat-ball" />
          </div>
      {/* </div> */}
      </div>
    </section>
  )
};