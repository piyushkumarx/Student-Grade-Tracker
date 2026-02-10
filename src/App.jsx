import { useContext, useState } from "react";
import AddStudent from "./components/AddStudents.jsx";
import StudentCard from "./components/StudentCard.jsx";
import Header from "./components/Header.jsx";
import SmallCard from "./components/SmallCard.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DeleteModal from "./components/Delete.jsx";
import EditStudent from "./components/EditModal.jsx";

import {
  faUserGroup,
  faUserCheck,
  faUserXmark,
  faUserPen,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import StudentContext from "./components/Context.js";

function App() {
  const {
    students,
    deleteStudent,
    filter,
    setFilter,
    isDeleteOpen,
    openDeleteBox,
    isEditOpen,
    setIsEditOpen,
    editStudent,
  setEditStudent,
  } = useContext(StudentContext);

  const passedStudents = students.filter((s) => s.grade >= 60);
  const failedStudents = students.filter((s) => s.grade < 60);

  const totalGrade = students.reduce((acc, student) => {
    return acc + Number(student.grade);
  }, 0);

  const average = (totalGrade / students.length).toFixed(1);

  let filteredStudents = students;

  if (filter === "passed") {
    filteredStudents = passedStudents;
  } else if (filter === "failed") {
    filteredStudents = failedStudents;
  }

  return (
    <div>
      <Header />
      <div className="main-content">
        <AddStudent />
        <div>
          <div className="small-card-components">
            <SmallCard
              icon={faUserGroup}
              title={"Total"}
              color={"grey"}
              number={students.length}
            />
            <SmallCard
              icon={faUserCheck}
              title={"Passed"}
              color={"green"}
              number={passedStudents.length}
            />
            <SmallCard
              icon={faUserXmark}
              title={"Failed"}
              color={"red"}
              number={failedStudents.length}
            />
            <SmallCard
              title={"Average"}
              color={"blue"}
              number={`${average > 0 ? average : 0}%`}
            />
          </div>

          <div className="filter-bar">
            <button
              className={filter === "all" ? "filter-btn-active" : "filter-btn"}
              onClick={() => setFilter("all")}
            >
              All Students
            </button>

            <button
              className={
                filter === "passed" ? "filter-btn-active" : "filter-btn"
              }
              onClick={() => setFilter("passed")}
            >
              Passed
            </button>

            <button
              className={
                filter === "failed" ? "filter-btn-active" : "filter-btn"
              }
              onClick={() => setFilter("failed")}
            >
              Failed
            </button>
          </div>

          {isDeleteOpen && <DeleteModal />}

          <div className="grade-card">
            {filteredStudents.length === 0 ? (
              <div className="no-student">
                <FontAwesomeIcon icon={faUserPen} className="no-student-icon" />
                <h4>No students found</h4>
                <p>Add a student to get started</p>
              </div>
            ) : (
              filteredStudents.map((student) => (
                <StudentCard
                  key={student.id}
                  studentname={student.stdtName}
                  studentId={student.id}
                  grade={student.grade}
                  onDelete={() => deleteStudent(student.id)}
                  isPass={student.grade > 59}
                  openDeleteBox={openDeleteBox}
                   openEditBox={() => {setEditStudent(student); setIsEditOpen(true);}}
                />
              ))
            )}
          </div>

          {isEditOpen && <EditStudent />}
        </div>
      </div>
    </div>
  );
}

export default App;
