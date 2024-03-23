import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"; 
import Typewriter from "typewriter-effect";
import "../component-styles/Home.css"

function Home() {
    return(
        <div className="w-100 home" id="home">
            <div className="homeTextPart text-white">
                <div>
                    <h3 className="welcome">Welcome!</h3>
                    <h1>
                        <Typewriter 
                            options={{
                                autoStart: true,
                                loop: false,
                                delay: 60,
                                deleteSpeed: 100000,
                                strings: ["Kevin McDonald"]
                            }}
                        />
                    </h1>
                    <p>
                        If you would like to contact me, click the button below!
                    </p>
                    <div className="icons">
                        <a href="https://github.com/kevkevmcd"><FontAwesomeIcon className="icon" icon={faGithub} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;