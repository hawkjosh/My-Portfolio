import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Toolbox from '../components/Toolbox.jsx';
import Profile from '../assets/img/profile_photo.jpg';

export default function About() {
  return (
    <section className="page-section bg-white" id="about">
      <div className="container">
        <div className="row page-section">
          <div className="col-lg-12 pt-4 pt-lg-0">
            <h2 className="page-section-heading text-center text-uppercase">About Me</h2>
            <div className="divider-custom divider">
              <div className="divider-custom-line"></div>
                <div className="divider-custom-icon">
                  <FontAwesomeIcon icon="fa-regular fa-id-card" />
                </div>
              <div className="divider-custom-line"></div>
            </div>
            <img className="img-thumbnail float-end mb-3 ms-4" src={Profile} alt="Profile Pic" />
            <p className="container lead my-4">Welcome to my portfolio! My name is Josh Hawk and I have been an educator for the past 15 years. I recently decided to forge a new path into the exciting world of tech. Having no background in coding, I enrolled in a full stack web development boot camp through Georgia Tech to jumpstart this career change.</p>
            <p className="container lead mt-5">Please check out some of my favorite work samples from various projects I created throughout the boot camp in my Portfolio section. Feel free to reach out to me with any questions or comments using the contact form. I hope you enjoy, and thanks for stopping by!</p>
            <br />
            <div className="mt-5 mx-auto">
              <Toolbox />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};