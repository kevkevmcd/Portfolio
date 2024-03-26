import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer(){
    return(
        <div className="p-3 text-center bg-dark text-white">
            <p className="mb-2"><FontAwesomeIcon icon={faEnvelope}/> Email: Kmcdusa@gmail.com</p>
            <p><FontAwesomeIcon icon={faPhone}/> Phone: (980) 699-7747</p>
        </div>
    )
}

export default Footer;