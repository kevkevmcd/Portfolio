import React, { useEffect } from "react";
import "../component-styles/About.css";
import AOS from 'aos';
import "aos/dist/aos.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faReact } from "@fortawesome/free-brands-svg-icons"; 
import Picture from "../static/mypic.jpg";
import { TypeAnimation } from 'react-type-animation';

function About() {
    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])

    const downloadResume = () => {
        const resumeUrl = 'https://www.dropbox.com/scl/fi/fs0e1mnna7o7xsmv1nw7o/Kevin-McDonald-Resume.pdf?dl=0';
        
        const anchor = document.createElement('a');
        anchor.href = resumeUrl;
        anchor.target = '_blank';
        anchor.download = 'Kevin-McDonald-Resume.pdf';
        anchor.click();
    };

    return(
        <div className="w-100 about" id="about">
            <div className="container">
                <br />
                <h1 className="text-center text-white title" data-aos = "fade-up">
                    <TypeAnimation
                        sequence={[
                            `About Me`,
                            1000,
                        ]}
                        speed={10}
                        style={{ whiteSpace: 'pre-line', fontSize: '2em' }}
                        deletionSpeed={100000000000}
                    />
                </h1>
                <br />
                <div className="row pt-5">
                    <div className="col-12 col-md-6 col-lg-6 mb-4 aboutImagePart" data-aos = "fade-up-right">
                        <img src={Picture} alt="My pic" className="rounded-image"/>
                        <div className="mySkills">
                            <p>Tech Skills | </p>
                            <div className="logos">
                                <ul>
                                    <li>
                                    </li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className="col-12 col-md-6 col-lg-6 aboutTextPart text-white" data-aos = "fade-up-left">
                        <div>
                            <h2>Academics</h2>
                            <hr />
                            <br />
                            <p>
                                I attended the University of North Carolina at Charlotte from 2018 - 2021. While there, I 
                                majored in Computer Science with a concentration in A.I., Robotics, & Gaming and minored in
                                Business!
                            </p>
                            <br />
                            <h2>Work Experience</h2>
                            <hr />
                            <br />
                            <p>
                                Newfold Digital: Software Engineer II
                            </p>
                            <button className="btn download mt-4" onClick={downloadResume}>Download Resume</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;