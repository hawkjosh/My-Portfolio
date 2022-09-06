import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Toolbox from '../components/Toolbox.jsx';
import ProfilePic from '../assets/img/profile_photo.jpg';
import Stack from 'react-bootstrap/Stack'

export default function About() {
  return (
    <section className="page-section container" id="about">
      <div className="">
        <img src={ProfilePic} alt="Profile Pic" />
        {/* <Stack className="about-text-container"> */}
        <Stack className="">
          {/* <div className="about-text-title"> */}
          <div className="">
            <h2 className="">About Me</h2>
            {/* <div className="divider-custom divider"> */}
            <div className="">
              {/* <div className="divider-custom-line"></div> */}
              <div className=""></div>
                {/* <div className="divider-custom-icon"> */}
                <div className="">
                  <FontAwesomeIcon icon="fa-regular fa-id-card" />
                </div>
              {/* <div className="divider-custom-line"></div> */}
              <div className=""></div>
            </div>
          </div>
          {/* <Stack direction="horizontal" gap={5}> */}
          <Stack>
            {/* <div className="about-text-paragraph"> */}
            <div className="">
              <p className="">Hello, welcome to my portfolio! I have been an educator for the past 15 years but I recently decided to forge a new path into the exciting world of tech. In order to jumpstart this career change, I enrolled myself in a full stack coding boot camp through Georgia Tech.</p>
            </div>
            {/* <div className="about-text-paragraph"> */}
            <div className="">
              <p className="">Please check out some of my favorite work samples from various projects I created throughout the boot camp in my Portfolio section. Feel free to reach out to me with any questions or comments using the contact form. I hope you enjoy, and thanks for stopping by!</p>
            </div>
          </Stack>
        </Stack>
      </div>
      <div className="">
        <Toolbox />
      </div>
    </section>
  )
};