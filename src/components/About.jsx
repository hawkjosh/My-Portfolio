import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Toolbox from '../components/Toolbox.jsx';
import Profile from '../assets/img/profile_photo.jpg';
import Stack from 'react-bootstrap/Stack';

export default function About() {
  return (
    <section className="page-section bg-white" id="about">
      <div className="page-section d-flex flex-column justify-content-center align-items-center">

        <Stack>
          <Stack className="flex-wrap align-self-center mb-5" direction="horizontal" gap={5}>
            <div className="container col-6">
              <h2 className="page-section-heading text-center text-uppercase">About Me</h2>

              <div className="divider-custom divider">
                <div className="divider-custom-line"></div>
                  <div className="divider-custom-icon">
                    <FontAwesomeIcon icon="fa-regular fa-id-card" />
                  </div>
                <div className="divider-custom-line"></div>
              </div>
            </div>

            <div className="container col 6">
              <img className="img-thumbnail mh-100" src={Profile} alt="Profile Pic" />
            </div>
          </Stack>

          <Stack className="justify-content-around align-items-start" direction="horizontal">
            <div className="col-6">
              <p className="container lead">Hello, welcome to my portfolio! I have been an educator for the past 15 years but I recently decided to forge a new path into the exciting world of tech. In order to jumpstart this career change, I enrolled myself in a full stack coding boot camp through Georgia Tech.</p>
            </div>

            <div className="col-6">
              <p className="container lead">Please check out some of my favorite work samples from various projects I created throughout the boot camp in my Portfolio section. Feel free to reach out to me with any questions or comments using the contact form. I hope you enjoy, and thanks for stopping by!</p>
            </div>
          </Stack>
        </Stack>
      </div>

      <div className="container">
        <Toolbox />
      </div>

    </section>
  )
};