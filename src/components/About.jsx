import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profilePic from '../assets/img/profile_photo.jpg';
import Toolbox from '../components/Toolbox.jsx';
import Stack from 'react-bootstrap/Stack'

export default function About() {
  return (
    <section className="page-section bg-white" id="about">
      <div className="page-section d-flex flex-row justify-content-center align-items-flex-start">

        <div className="container col-5">
          <img className="img-fluid mx-5" src={profilePic} alt="Josh Hawk Profile" style={{borderRadius: "3.5rem"}} />
        </div>

        <Stack className="mx-5">
          <div className="container col-8 w-auto">
            <h2 className="page-section-heading text-center text-uppercase">About Me</h2>

            <div className="divider-custom divider">
              <div className="divider-custom-line"></div>
                <div className="divider-custom-icon">
                  <FontAwesomeIcon icon="fa-regular fa-star" />
                </div>
              <div className="divider-custom-line"></div>
            </div>
          </div>

          <Stack className="container col-8 w-auto" direction="horizontal" gap={4} >
            <div className="conatiner col-4 w-50 ms-auto align-self-start">
              <p className="lead">Hello, welcome to my portfolio! I have been an educator for the past 15 years but I recently decided to forge a new path into the exciting world of tech. In order to jumpstart this career change, I enrolled myself in a full stack coding boot camp through Georgia Tech.</p>
            </div>

            <div className="container col-4 w-50 me-auto">
              <p className="lead">Please check out some of my favorite work samples from various projects I created throughout the boot camp in my Portfolio section. Feel free to reach out to me with any questions or comments using the contact form. I hope you enjoy, and thanks for stopping by!</p>
            </div>
          </Stack>
        </Stack>
      </div>

      <div>
        <Toolbox />
      </div>

    </section>
  )
};