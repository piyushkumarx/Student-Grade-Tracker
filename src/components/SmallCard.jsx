import React from "react";
import "./SmallCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserGroup ,  } from "@fortawesome/free-solid-svg-icons";
// import StudentContext from "./Context";

export default function SmallCard(props) {

  
  return (
    <div className="small-card">
      <span className="head-small-card">
        <FontAwesomeIcon
          icon={props.icon}
          size="lg"
          className={props.color}
        />
        <h3 className={["grey", "blue"].includes(props.color) ? "common-color" : props.color}>{props.title }</h3>
      </span>
      <p className={props.color === "grey" ? null : props.color }>{props.number}</p>
    </div>
  );
}
