import React, { useEffect } from "react";
import "../component-styles/About.css";
import AOS from 'aos';
import "aos/dist/aos.css"
import Picture from "../static/mypic.jpg";
import { TypeAnimation } from 'react-type-animation';

function About() {
    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])
    return(
        <div className="w-100 about" id="about">
            <div className="container">
                <div className="row pt-5">
                    <div className="col-12 col-md-6 col-lg-6 aboutImagePart" data-aos = "fade-right">
                        <img src={Picture} alt="My pic"/>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6 aboutTextPart text-white" data-aos = "fade-left">
                        <div>
                            <h2>
                                <TypeAnimation
                                    sequence={[
                                        `Academics`,
                                        1000,
                                    ]}
                                    speed={10}
                                    style={{ whiteSpace: 'pre-line', fontSize: '1em' }}
                                    deletionSpeed={100000000000}
                                />
                            </h2>

                            <p>
                                I attended the University of North Carolina at Charlotte from 2018 - 2021. While there, I 
                                majored in Computer Science with a concentration in A.I., Robotics, & Gaming and minored in
                                Business!
                            </p>
                            <br />
                            <h2>
                                <TypeAnimation
                                    sequence={[
                                        `Work Experience`,
                                        1000,
                                    ]}
                                    speed={10}
                                    style={{ whiteSpace: 'pre-line', fontSize: '1em' }}
                                    deletionSpeed={100000000000}
                                />
                            </h2>

                            <p>
                                Newfold Digital: Software Engineer II
                            </p>
                            <button className="btn download mt-4">Download Resume</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;