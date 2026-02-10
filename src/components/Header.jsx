import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";


export default function Header(){
    return(
        <div className="header">
            <FontAwesomeIcon icon={faGraduationCap}  style={{color: "#242222b2"}}  className="cap-icon"/>
            <h1>Student Grade Tracker</h1>
            <p>Making the Grade, Without the Headache</p>

        </div>
    )
}