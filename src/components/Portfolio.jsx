import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import messageForum from '../assets/img/portfolio/message_forum.png';
import noteTaker from '../assets/img/portfolio/note_taker.png';
import songSearch from '../assets/img/portfolio/song_search.png';
import weatherDashboard from '../assets/img/portfolio/weather_dashboard.png';
import workdayScheduler from '../assets/img/portfolio/workday_scheduler.png';
import codeQuiz from '../assets/img/portfolio/code_quiz.png';
import Modals from '../components/Modals.jsx';

export default function Portfolio() {
  return (
    <section className="portfolio page-section bg-primary text-white text-center" id="portfolio">
      <div className="page-section">
        <h2 className="page-section-heading text-center text-uppercase text-white m-auto">My Portfolio</h2>

        <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
              <div className="divider-custom-icon">
                <FontAwesomeIcon icon="fa-regular fa-star" />
              </div>
            <div className="divider-custom-line bg-white"></div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 mb-5">
            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white">
                  <FontAwesomeIcon icon="rocket" style={{width: "50%", height: "50%", color: "#2c3e50"}}/>
                  <h4 className="text-white fw-bold text-center">Message Forum</h4>
                </div>
              </div>
              <a data-toggle="modal" href="#portfolioModal1">
                <img className="img-fluid" src={messageForum} alt="Message Forum App" style={{border: "0.5rem solid #126d5b"}} />
              </a>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-5">
            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white">
                  <FontAwesomeIcon icon="rocket" style={{width: "50%", height: "50%", color: "#2c3e50"}}/>
                  <h4 className="text-white fw-bold text-center">Note Taker</h4>
                </div>
              </div>
              <a data-toggle="modal" href="#portfolioModal2">
                <img className="img-fluid" src={noteTaker} alt="Note Taker App" style={{border: "0.5rem solid #126d5b"}} />
              </a>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-5">
            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white">
                  <FontAwesomeIcon icon="rocket" style={{width: "50%", height: "50%", color: "#2c3e50"}}/>
                  <h4 className="text-white fw-bold text-center">Song Search</h4>
                </div>
              </div>
              <a data-toggle="modal" href="#portfolioModal3">
                <img className="img-fluid" src={songSearch} alt="Song Search App" style={{border: "0.5rem solid #126d5b"}} />
              </a>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4">
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white">
                  <FontAwesomeIcon icon="rocket" style={{width: "50%", height: "50%", color: "#2c3e50"}}/>
                  <h4 className="text-white fw-bold text-center">Weather Dashboard</h4>
                </div>
              </div>
              <a data-toggle="modal" href="#portfolioModal4">
                <img className="img-fluid" src={weatherDashboard} alt="Weather Dashboard App" style={{border: "0.5rem solid #126d5b"}} />
              </a>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal5">
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white">
                  <FontAwesomeIcon icon="rocket" style={{width: "50%", height: "50%", color: "#2c3e50"}}/>
                  <h4 className="text-white fw-bold text-center">Workday Scheduler</h4>
                </div>
              </div>
              <a data-toggle="modal" href="#portfolioModal5">
                <img className="img-fluid" src={workdayScheduler} alt="Workday Scheduler App" style={{border: "0.5rem solid #126d5b"}} />
              </a>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal6">
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white">
                  <FontAwesomeIcon icon="rocket" style={{width: "50%", height: "50%", color: "#2c3e50"}}/>
                  <h4 className="text-white fw-bold text-center">Code Quiz</h4>
                </div>
              </div>
              <a data-toggle="modal" href="#portfolioModal6">
                <img className="img-fluid" src={codeQuiz} alt="Code Quiz App" style={{border: "0.5rem solid #126d5b"}} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
      <Modals />
      </div>
    </section>
  )
};