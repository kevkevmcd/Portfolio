import React, { useEffect } from "react";
import "../component-styles/About.css";
import AOS from 'aos';
import "aos/dist/aos.css"
import Picture from "../static/mypic.jpg";

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
                            <h3>
                                Hello, my name is Kevin McDonald
                            </h3>

                            <p>
                                I am a software engineer. I went to uncc and studied computer science.
                                Over the past 2 years I have been working at Newfold and I have gained a lot of 
                                experience.
                            </p>

                            <table>
                                <tbody>
                                    <tr>
                                        <td className="pe-5">Name</td>
                                        <td>: Kevin McDonald</td>
                                    </tr>
                                    <tr>
                                        <td className="pe-5">Age</td>
                                        <td>: 24</td>
                                    </tr>
                                    <tr>
                                        <td className="pe-5">Address</td>
                                        <td>: Charlotte NC</td>
                                    </tr>
                                </tbody>
                            </table>
                            <button className="btn download mt-4">Download Resume</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;