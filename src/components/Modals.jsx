import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import socialNetwork from '../assets/img/portfolio/social_network.png';
import messageForum from '../assets/img/portfolio/message_forum.png';
import songSearch from '../assets/img/portfolio/song_search.png';
import noteTaker from '../assets/img/portfolio/note_taker.png';
import weatherDashboard from '../assets/img/portfolio/weather_dashboard.png';
import workdayScheduler from '../assets/img/portfolio/workday_scheduler.png';

export default function Modals() {
  return (
    <section>

      <div className="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h2 className="portfolio-modal-title text-white text-uppercase mb-0">Social Network App</h2>
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><FontAwesomeIcon icon="fa-regular fa-folder-open" /></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <img className="img-fluid rounded mb-5" src={socialNetwork} alt="Social Network App" style={{border: "0.2rem solid #2c3e50"}} />
                    <p className="ms-4 mb-4 fs-4 text-start">An efficient and polished full-stack social network app that uses React.js on the client-side with Tailwind frameworks for styling. The server-side is built with Express.js including MongoDB as the ODM, GraphQL for runtime API's, and JWT for authentication.</p>
                    <div className="container d-flex flex-row justify-content-around">
                      <button className="btn btn-secondary col-4">
                        <a className="project-link text-white fw-bold" href="https://stayintouchnetwork.herokuapp.com/" target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>Web App</a>
                      </button>
                      <button className="btn btn-secondary col-4">
                        <a className="project-link text-white fw-bold" href="https://github.com/GTBCP3G5/Stay-In-Touch-Social-Network" target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>GitHub Repo</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" aria-labelledby="portfolioModal2" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h2 className="portfolio-modal-title text-white text-uppercase mb-0">Message Forum App</h2>
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><FontAwesomeIcon icon="fa-regular fa-folder-open" /></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <img className="img-fluid rounded mb-5" src={messageForum} alt="Message Forum App" style={{border: "0.2rem solid #2c3e50"}} />
                    <p className="ms-4 mb-4 fs-4 text-start">A unique and fun message forum app that follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the Express-Session npm package for authentication.</p>
                    <div className="container d-flex flex-row justify-content-around">
                      <button className="btn btn-secondary col-4">
                        <a className="project-link text-white fw-bold" href="https://glacial-tor-15581.herokuapp.com" target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>Web App</a>
                      </button>
                      <button className="btn btn-secondary col-4">
                        <a className="project-link text-white fw-bold" href="https://github.com/hawkjosh/Message-Forum" target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>GitHub Repo</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" aria-labelledby="portfolioModal3" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h2 className="portfolio-modal-title text-white text-uppercase mb-0">Song Search App</h2>
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><FontAwesomeIcon icon="fa-regular fa-folder-open" /></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <img className="img-fluid rounded mb-5" src={songSearch} alt="Song Search App" style={{border: "0.2rem solid #2c3e50"}} />
                    <p className="ms-4 mb-4 fs-4 text-start">A small but powerful music search tool that uses third party API's to retrieve song information via RESTful CRUD routes.</p>
                    <div className="container d-flex flex-row justify-content-around">
                      <button className="btn btn-secondary col-4">
                        <a className="project-link text-white fw-bold" href="https://hawkjosh.github.io/Song-Search" target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>Web App</a>
                      </button>
                      <button className="btn btn-secondary col-4">
                        <a className="project-link text-white fw-bold" href="https://github.com/hawkjosh/Song-Search" target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>GitHub Repo</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" aria-labelledby="portfolioModal4" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h2 className="portfolio-modal-title text-white text-uppercase mb-0">Note Taker App</h2>
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><FontAwesomeIcon icon="fa-regular fa-folder-open" /></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <img className="img-fluid rounded mb-5" src={noteTaker} alt="Note Taker App" style={{border: "0.2rem solid #2c3e50"}} />
                    <p className="ms-4 mb-4 fs-4 text-start">A clean, crisp, and very usefuly note-taking app that uses an express.js backend that allows users to save and retrieve note data from a JSON file.</p>
                    <div className="container d-flex flex-row justify-content-around">
                      <button className="btn btn-secondary col-4">
                        <a className="project-link text-white fw-bold" href="https://secure-ravine-29968.herokuapp.com" target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>Web App</a>
                      </button>
                      <button className="btn btn-secondary col-4">
                        <a className="project-link text-white fw-bold" href="https://github.com/hawkjosh/Note-Taker" target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>GitHub Repo</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" aria-labelledby="portfolioModal5" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h2 className="portfolio-modal-title text-white text-uppercase mb-0">Weather Dashboard App</h2>
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><FontAwesomeIcon icon="fa-regular fa-folder-open" /></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <img className="img-fluid rounded mb-5" src={weatherDashboard} alt="Weather Dashboard App" style={{border: "0.2rem solid #2c3e50"}} />
                    <p className="ms-4 mb-4 fs-4 text-start">A nifty weather widget app that runs in the browser and retrieves current as well as forectast weather info via the OpenWeatherMap API.</p>
                    <div className="container d-flex flex-row justify-content-around">
                      <button className="btn btn-secondary col-4">
                        <a className="project-link text-white fw-bold" href="https://hawkjosh.github.io/Weather-Dashboard" target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>Web App</a>
                      </button>
                      <button className="btn btn-secondary col-4">
                        <a className="project-link text-white fw-bold" href="https://github.com/hawkjosh/Weather-Dashboard" target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>GitHub Repo</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" aria-labelledby="portfolioModal6" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h2 className="portfolio-modal-title text-white text-uppercase mb-0">Workday Scheduler App</h2>
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><FontAwesomeIcon icon="fa-regular fa-folder-open" /></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <img className="img-fluid rounded mb-5" src={workdayScheduler} alt="Workday Scheduler App" style={{border: "0.2rem solid #2c3e50"}} />
                    <p className="ms-4 mb-4 fs-4 text-start">A simple calendar/planner app that runs in the browser and features dynamically updated HTML and CSS powered by jQuery.</p>
                    <div className="container d-flex flex-row justify-content-around">
                      <button className="btn btn-secondary col-4">
                        <a className="project-link text-white fw-bold" href="https://hawkjosh.github.io/Workday-Scheduler" target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>Web App</a>
                      </button>
                      <button className="btn btn-secondary col-4">
                        <a className="project-link text-white fw-bold" href="https://github.com/hawkjosh/Workday-Scheduler" target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>GitHub Repo</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
