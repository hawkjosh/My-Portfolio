import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import socialNetwork from '../assets/img/portfolio/social_network.png';
import messageForum from '../assets/img/portfolio/message_forum.png';
import songSearch from '../assets/img/portfolio/song_search.png';
import noteTaker from '../assets/img/portfolio/note_taker.png';
import weatherDashboard from '../assets/img/portfolio/weather_dashboard.png';
import workdayScheduler from '../assets/img/portfolio/workday_scheduler.png';
import Modals from '../components/Modals.jsx';

export default function Portfolio() {
  return (
    <section className="" id="portfolio">
      <div className="">
        <h2 className="">My Portfolio</h2>

        {/* <div className="divider-custom divider-light mb-5"> */}
        <div className="">
            {/* <div className="divider-custom-line"></div> */}
            <div className=""></div>
              {/* <div className="divider-custom-icon"> */}
              <div className="">
                <FontAwesomeIcon icon="fa-regular fa-folder" />
              </div>
            {/* <div className="divider-custom-line bg-white"></div> */}
            <div className=""></div>
        </div>

        <div className="">

        <div className="">
            <div className="" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
              <div className="">
                <div className="">
                  {/* <FontAwesomeIcon icon="rocket" style={{width: "50%", height: "50%", color: "#2c3e50"}}/> */}
                  <FontAwesomeIcon icon="rocket" />
                  <h4 className="">Social Network</h4>
                </div>
              </div>
              <a data-toggle="modal" href="#portfolioModal1">
                {/* <img className="img-fluid" src={socialNetwork} alt="Social Network App" style={{border: "0.3rem solid #2c3e50"}} /> */}
                <img className="" src={socialNetwork} alt="Social Network App" />
              </a>
            </div>
          </div>

          
          <div className="">
            <div className="" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
              <div className="">
                <div className="">
                  {/* <FontAwesomeIcon icon="rocket" style={{width: "50%", height: "50%", color: "#2c3e50"}}/> */}
                  <FontAwesomeIcon icon="rocket" />
                  <h4 className="">Message Forum</h4>
                </div>
              </div>
              <a data-toggle="modal" href="#portfolioModal2">
                {/* <img className="img-fluid" src={messageForum} alt="Message Forum App" style={{border: "0.3rem solid #2c3e50"}} /> */}
                <img className="" src={messageForum} alt="Message Forum App" />
              </a>
            </div>
          </div>

          <div className="">
            <div className="" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
              <div className="">
                <div className="">
                  {/* <FontAwesomeIcon icon="rocket" style={{width: "50%", height: "50%", color: "#2c3e50"}}/> */}
                  <FontAwesomeIcon icon="rocket" />
                  <h4 className="">Song Search</h4>
                </div>
              </div>
              <a data-toggle="modal" href="#portfolioModal3">
                {/* <img className="img-fluid" src={songSearch} alt="Song Search App" style={{border: "0.3rem solid #2c3e50"}} /> */}
                <img className="" src={songSearch} alt="Song Search App" />
              </a>
            </div>
          </div>

          <div className="">
            <div className="" data-bs-toggle="modal" data-bs-target="#portfolioModal4">
              <div className="">
                <div className="">
                  {/* <FontAwesomeIcon icon="rocket" style={{width: "50%", height: "50%", color: "#2c3e50"}}/> */}
                  <FontAwesomeIcon icon="rocket" />
                  <h4 className="">Note Taker</h4>
                </div>
              </div>
              <a data-toggle="modal" href="#portfolioModal4">
                {/* <img className="img-fluid" src={noteTaker} alt="Note Taker App" style={{border: "0.3rem solid #2c3e50"}} /> */}
                <img className="" src={noteTaker} alt="Note Taker App" />
              </a>
            </div>
          </div>

          <div className="">
            <div className="" data-bs-toggle="modal" data-bs-target="#portfolioModal5">
              <div className="">
                <div className="">
                  {/* <FontAwesomeIcon icon="rocket" style={{width: "50%", height: "50%", color: "#2c3e50"}}/> */}
                  <FontAwesomeIcon icon="rocket" />
                  <h4 className="">Weather Dashboard</h4>
                </div>
              </div>
              <a data-toggle="modal" href="#portfolioModal5">
                {/* <img className="img-fluid" src={weatherDashboard} alt="Weather Dashboard App" style={{border: "0.3rem solid #2c3e50"}} /> */}
                <img className="" src={weatherDashboard} alt="Weather Dashboard App" />
              </a>
            </div>
          </div>

          <div className="">
            <div className="" data-bs-toggle="modal" data-bs-target="#portfolioModal6">
              <div className="">
                <div className="">
                  {/* <FontAwesomeIcon icon="rocket" style={{width: "50%", height: "50%", color: "#2c3e50"}}/> */}
                  <FontAwesomeIcon icon="rocket" />
                  <h4 className="">Workday Scheduler</h4>
                </div>
              </div>
              <a data-toggle="modal" href="#portfolioModal6">
                {/* <img className="img-fluid" src={workdayScheduler} alt="Workday Scheduler App" style={{border: "0.3rem solid #2c3e50"}} /> */}
                <img className="" src={workdayScheduler} alt="Workday Scheduler App" />
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