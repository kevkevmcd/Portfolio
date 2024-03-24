import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"; 
import "../component-styles/Home.css"
import { TypeAnimation } from 'react-type-animation';

function Home() {
    return(
        <div className="w-100 home" id="home">
            <div className="homeTextPart text-white">
                <div>
                    <h1>
                        <TypeAnimation
                            sequence={[
                                `Hi!\nI'm Kevin McDonald`,
                                1000,
                            ]}
                            speed={10}
                            style={{ whiteSpace: 'pre-line', fontSize: '2em' }}
                            deletionSpeed={100000000000}
                        />
                    </h1>
                    <h4>
                        Explore my website to learn a bit more about me!
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default Home;