import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import "../component-styles/Footer.css"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
    <footer className="footer">
        <div className="w-100 text-center text-white">
            <div className="container">
                <div className="foot p-3 mx-5">
                    <div className="mx-3">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>
                        <a className="email" href="mailto:kmcdusa@gmail.com">kmcdusa@gmail.com</a>
                    </span>
                    </div>
                    <div className="mx-3">
                        <p className="mt-2">
                            <FontAwesomeIcon icon={faPhone} /> (980) 699-7747
                        </p>
                    </div>
                </div>
                <div className="foot-social mx-5">
                    <a href="https://www.linkedin.com/in/kevin-mcdonald-264501208/" className="mx-2">
                        <FontAwesomeIcon icon={faLinkedin} size="xl" />
                    </a>
                    <a href="https://github.com/kevkevmcd" className="mx-2">
                        <FontAwesomeIcon icon={faGithub} size="xl"/>
                    </a>
                </div>
            </div>
        </div>            
    </footer>
    );
  }

export default Footer;