import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Contact() {
  return (
    <section className="page-section" id="contact">
      <div className="">
        <h2 className="">Contact Me</h2>
        {/* <div className="divider-custom divider mb-5"> */}
        <div className="">
          {/* <div className="divider-custom-line"></div> */}
          <div className=""></div>
          {/* <div className="divider-custom-icon"> */}
          <div className="">
            <FontAwesomeIcon icon="fa-regular fa-pen-to-square" />
          </div>
          {/* <div className="divider-custom-line"></div> */}
          <div className=""></div>
        </div>
      </div>
      <form target="_blank" action="https://formsubmit.co/fdc600bd598b4f6fe804872e952a9823" method="POST">
        <div className="">
          <div className="">
            <div className="">
              <input className="" type="text" name="name" placeholder="Full Name" required></input>
            </div>
            <div className="">
              <input className="" type="email" name="email" placeholder="Email Address" required></input>
            </div>
            <div className="">
              <textarea className="" name="message" placeholder="Your Message" rows="10" required></textarea>
              <button className="btn" type="submit">Submit Form</button>
            </div>
          </div>
        </div>
      </form>
    </section>
  )
};