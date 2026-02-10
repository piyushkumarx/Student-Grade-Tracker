import React, { useContext, useState } from "react";
import "./EditModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";
import StudentContext from "./Context";

export default function EditStudent() {
  const {
    editStudent,
    students,
    setStudents,
    setIsEditOpen, }= useContext(StudentContext);


  const [name, setName] = useState(editStudent.stdtName);
  const [grade, setGrade] = useState(editStudent.grade);

  const handleSave = (e) => {
    e.preventDefault();

    const updatedList = students.map((student) =>
      student.id === editStudent.id
        ? { ...student, stdtName: name, grade: Number(grade) }: student);

    setStudents(updatedList);
    setIsEditOpen(false); 
  };

  return (
    <div className="edit-overlay">
      <form className="edit-student" onSubmit={handleSave}>
        <div className="edit-heading">
          <FontAwesomeIcon icon={faUserPen} className="student-icon" />
          <h2>Edit Student</h2>
        </div>

        <div className="student-input">
          <label>Student Name</label>
          <input
            type="text"
            className="input-student"
            value={name}
            onChange={(e) => setName(e.target.value.trim())}
            required
          />
        </div>

        <div className="student-input">
          <label>Grade (0–100)</label>
          <input
            type="number"
            className="input-student"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            min="0"
            max="100"
          />
        </div>

        <button type="submit" className="edit-button">
          Save
        </button>
      </form>
    </div>
  );
}
