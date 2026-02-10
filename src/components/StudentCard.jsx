import React from "react";
import "./StudentCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare} from "@fortawesome/free-solid-svg-icons";

export default function StudentCard({ studentname, studentId, grade,   isPass ,openDeleteBox  , openEditBox}) {
  return (
    <div className={`student-card ${isPass ? "pass-main-box" : "fail-main-box"}`}>
      <div className="student-info-heading">
        <h2>{studentname}</h2>
        <p>Student ID: <span>{studentId}</span></p>
      </div>
      <div className="student-info-grade">
        <span   className={`percentage ${isPass ? "percentage-pass" : "percentage-fail"}`}>{grade}%</span>
        <span className={isPass ? "pass" : "fail" }>{isPass ? "Passed" : "Failed"}</span>
        <FontAwesomeIcon icon={faPenToSquare} className="edit-btn" onClick={openEditBox} />
        <FontAwesomeIcon icon={faTrashCan} className="trash-icon" onClick={()=>openDeleteBox(studentId)}/>
      </div>
    </div>
  );
}
