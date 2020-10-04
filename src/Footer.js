import { faInstagram, faLinkedin, faMedium } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Footers(){
    return (
        <div className="footer-container">
          <h3 className = "heading">Created by Vanshikha Singh</h3>
            <a href='https://www.linkedin.com/in/vanshikha-singh-3986a118b/'
                className="linkedin footer">
                <FontAwesomeIcon icon={faLinkedin} size="2x"/>
            </a>
            <a href='https://www.instagram.com/___vanshikha___' className="instagram footer">
               <FontAwesomeIcon  icon={faInstagram} size="2x"/>
            </a>
            <a href='https://medium.com/@svanshikha8' className="medium footer">
                <FontAwesomeIcon icon={faMedium} size="2x"/>
            </a>
        </div>
      );
    }
