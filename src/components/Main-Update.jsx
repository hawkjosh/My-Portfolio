import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import myAvatar from '../assets/img/my_avataaars.svg';
import Stack from 'react-bootstrap/Stack';

export default function Main() {
  return (
    <section className="" id="mainPage">
      <div className="">
        <img className="" src={myAvatar} alt="Josh Hawk Avatar" />

          <h1 className="">Josh Hawk</h1>

          {/* <div className="divider-custom divider-light mb-3"> */}
          <div className="">
            {/* <div className="divider-custom-line"></div> */}
            <div className=""></div>
              {/* <div className="divider-custom-icon fs-1"> */}
              <div className="">
                <FontAwesomeIcon icon="fa-regular fa-star" />
              </div>
            {/* <div className="divider-custom-line"></div> */}
            <div className=""></div>
          </div>
        
        <div className="">
          {/* <Stack direction="horizontal" gap={5}> */}
          <Stack>
            {/* <Stack className="d-flex flex-row flex-wrap justify-content-around" direction="horizontal" gap={3}> */}
            <Stack>
              <p className="">Emerging Developer</p>
              <p className=""><FontAwesomeIcon icon="laptop-code" /></p>
            </Stack>
            {/* <Stack className="d-flex flex-row flex-wrap justify-content-around" direction="horizontal" gap={3}> */}
            <Stack>
              <p className="">Super Dad/Husband</p>
              <p className=""><FontAwesomeIcon icon="people-roof" /></p>
            </Stack>
            {/* <Stack className="d-flex flex-row flex-wrap justify-content-around align-items-center" direction="horizontal" gap={3}> */}
            <Stack>
              <p className="">Lifetime Braves Fan</p>
              <p className=""><FontAwesomeIcon icon="baseball-bat-ball" /></p>
            </Stack>
          </Stack>
        </div>
      </div>
    </section>
  )
};