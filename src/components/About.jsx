import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Toolbox from '../components/Toolbox.jsx';
import Stack from 'react-bootstrap/Stack'

export default function About() {
  return (
    <section className="page-section bg-white" id="about">
      <div className="page-section d-flex flex-row justify-content-center align-items-start">

        <div className="about-image"></div>

        <Stack className="about-text-container">
          <div className="about-text-title">
            <h2 className="page-section-heading text-center text-uppercase">About Me</h2>

            <div className="divider-custom divider">
              <div className="divider-custom-line"></div>
                <div className="divider-custom-icon">
                  <FontAwesomeIcon icon="fa-regular fa-id-card" />
                </div>
              <div className="divider-custom-line"></div>
            </div>
          </div>

          <Stack direction="horizontal" gap={5}>
            <div className="about-text-paragraph">
              <p className="lead">Hello, welcome to my portfolio! I have been an educator for the past 15 years but I recently decided to forge a new path into the exciting world of tech. In order to jumpstart this career change, I enrolled myself in a full stack coding boot camp through Georgia Tech.</p>
            </div>

            <div className="about-text-paragraph">
              <p className="lead">Please check out some of my favorite work samples from various projects I created throughout the boot camp in my Portfolio section. Feel free to reach out to me with any questions or comments using the contact form. I hope you enjoy, and thanks for stopping by!</p>
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