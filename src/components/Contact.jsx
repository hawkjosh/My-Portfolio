import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Contact() {
  return (
    <section className="page-section" id="contact">
      <div className="page-section">
        <h2 className="page-section-heading text-center text-uppercase text-secondary m-auto">Contact Me</h2>

        <div className="divider-custom divider">
          <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <FontAwesomeIcon icon="fa-regular fa-star" />
            </div>
          <div className="divider-custom-line"></div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7">
            <form id="contactForm" data-sb-form-api-token="API_TOKEN">
              <div className="form-floating mb-3">
                <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                <label for="name">Name</label>
                <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
              </div>

              <div className="form-floating mb-3">
                <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                <label for="email">Email</label>
                <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
              </div>

              <div className="form-floating mb-3">
                <input className="form-control" id="phone" type="tel" placeholder="123.456.7890" data-sb-validations="required" />
                <label for="phone">Phone</label>
                <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
              </div>

              <div className="form-floating mb-3">
                <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{height: "10rem"}} data-sb-validations="required"></textarea>
                <label for="message">Message</label>
                <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
              </div>

              <div className="d-none" id="submitSuccessMessage">
                  <div className="text-center mb-3 fw-bolder">Form submission successful!</div>
              </div>

              <div className="d-none" id="submitErrorMessage">
                <div className="text-center text-red mb-3">Error sending message!</div>
              </div>

              <button className="btn btn-secondary btn-xl" id="submitButton" type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
};