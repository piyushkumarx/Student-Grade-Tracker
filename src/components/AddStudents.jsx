import React, { useState, useContext } from "react";
import "./AddStudents.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import StudentContext from "./Context";

export default function AddStudent() {
  const { studentIdGen, students, setStudents } = useContext(StudentContext);

  const [studentName, setStudentName] = useState("");
  const [studentGrade, setStudentGrade] = useState("");

  function newStudentAdd(e) {
    e.preventDefault()
    const newStudent = {
      id: studentIdGen(),
      stdtName: studentName,
      grade: Number(studentGrade), 
    };

    setStudents([...students, newStudent]);

    setStudentName("");
    setStudentGrade("");
  }

  
  return (
    <form className="add-new-student" onSubmit={newStudentAdd}>
      <div className="add-heading">
        <FontAwesomeIcon icon={faUserPlus} className="student-icon" />
        <h2>Add New Student</h2>
      </div>

      <div className="student-input">
        <label htmlFor="name">Student Name</label>
        <input
          type="text"
          id="name"
          className="input-student"
          placeholder="Enter student name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value.trim())}
          required
        />
      </div>

      <div className="student-input">
        <label htmlFor="grade">Grade (0-100)</label>
        <input
          type="number"
          id="grade"
          className="input-student"
          placeholder="Enter grade"
          value={studentGrade}
          onChange={(e) => setStudentGrade(e.target.value)}
          min="0"
          max="100"
          required
        />
      </div>

      <button className="add-button" type="submit">
        Add Student
      </button>
    </form>
  );
}


// faUserPen