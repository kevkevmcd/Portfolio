import React, {useEffect} from "react";
import "../component-styles/Projects.css"
import AOS from 'aos';
import "aos/dist/aos.css"
import { TypeAnimation } from 'react-type-animation';
import ReactPlayer from 'react-player';
import FPLDashDemo from "../static/FPL-Dash-Demo.mp4";
import FPLDashV2Demo from "../static/fplv2Demo.mp4";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Projects() {
    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])
    return(
        <div className="w-100 project" id="projects">
            <div className="container">
                <br />
                <h4 className="text-center text-white mt-4" data-aos = "fade-up" data-aos-duration="1000">
                    <TypeAnimation
                        sequence={[
                            `My Projects`,
                            1000,
                        ]}
                        speed={10}
                        style={{ whiteSpace: 'pre-line', fontSize: '2em' }}
                        deletionSpeed={100000000000}
                    />
                </h4>
                <p className="text-center mt-3 mb-5 project-description" data-aos="fade-up" data-aos-duration="2000">Although I don't have many yet, below are the personal projects I have developed! My goal is to try out something new with each project I work on whether that be a new language, 
                framework, or some other tech. If you want to see what I have worked on (even if it's not finished), check out my <a href="https://github.com/kevkevmcd">Github <FontAwesomeIcon icon={faGithub}/></a></p>
                <div className="row pt-5">
                    <div className="col-12 col-md-6 col-lg-6 aboutTextPart text-white" data-aos = "fade-up-right">
                        <div>
                            <h2>FPL-Dashboard</h2>
                            <hr />
                            <p className="project-description-indented ">
                                A Fantasy English Premier League dashboard created using Python with the Flask framework. My friends and I have had a fantasy league going for a few years now, 
                                so I decided to build out a dashboard website to better display the league data!
                                <br />
                                I chose to use Python to really take full advantage of libraries
                                such as Pandas. When it came time to deploy the website, I decided to use Docker to run it in a container and Render.com.
                            </p>
                            <p style={{ color: "#6e6e6e"}}>This website is no longer published.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 mb-4 center-text" data-aos = "fade-up-left">
                        <ReactPlayer url={FPLDashDemo} height='100%' width='100%' controls={true}/>
                        <br />                          
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col-12 col-md-6 col-lg-6 aboutTextPart text-white" data-aos = "fade-up-right">
                        <div>
                            <h2>FPL-Dashboard V2</h2>
                            <hr />
                            <p className="project-description-indented ">
                                Similar to the first iteration, this website was developed to be a Fantasy Premier League dashboard except this time just done better! For the FPL-Dashboard V2 I wanted
                                it to be more interactive, useful, and most importantly have better performance. To do this I decided to utilize Fast Api for the backend to take advantage of it's async
                                capabilites. Then I used React and MUI to make an interface to meet the goal of being more interactive. 
                                <br />
                                This website is still a work in progress and I plan to continue to add to it in iterations. Feel free to check it out with the link below:
                            </p>
                            <a href="https://www.fpl-dashboard.com/" className="icon-link">
                                https://fpl-dashboard.com/
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 mb-4 center-text" data-aos = "fade-up-left">
                        <ReactPlayer url={FPLDashV2Demo} height='100%' width='100%' controls={true}/>
                        <br />                          
                    </div>
                </div>
                <div className="row pt-5 text-center text-white mt-3 mb-5" data-aos = "fade-up">
                    <div className="card text-white more-projects mt-2 pt-4 pb-4">
                        <h4>
                            More projects to come...
                        </h4>
                    </div>
                </div>            
            </div>
            <br />
            <br />
            <br />
        </div>
    )
}

export default Projects;