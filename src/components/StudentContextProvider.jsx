import React, { useState } from "react";
import StudentContext from "./Context";

function StudentContextProvider({ children }) {
  let stnt = [
    { stdtName: "Piyush Kushwah", id: 27408942, grade: 78 },

    { stdtName: "Naveen", id: 27408242, grade: 22 },
    { stdtName: "Shreyas [Mern Mentor]", id: 23908242, grade: 92 },
  ];

  const [students, setStudents] = useState([stnt[0], stnt[1], stnt[2]]);
  const [filter, setFilter] = useState("all");
  const [deleteTaskId, setDeleteTaskId] = useState(null);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const [editStudent, setEditStudent] = useState(null);

  const [isEditOpen, setIsEditOpen] = useState(false);

  function deleteStudent(id) {
    setStudents(students.filter((s) => s.id !== id));
  }

  function studentIdGen() {
    return Math.floor(10000000 + Math.random() * 90000000);
  }

  const openDeleteBox = (id) => {
    setDeleteTaskId(id);
    setIsDeleteOpen(true);
  };

  const closeDeleteBox = () => {
    setDeleteTaskId(null);
    setIsDeleteOpen(false);
  };

  const confirmDelete = () => {
    if (deleteTaskId !== null) {
      deleteStudent(deleteTaskId);
    }
    closeDeleteBox();
  };

  return (
    <StudentContext.Provider
      value={{
        students,
        setStudents,
        studentIdGen,
        deleteStudent,
        filter,
        setFilter,
        openDeleteBox,
        closeDeleteBox,
        confirmDelete,
        isDeleteOpen,
        isEditOpen,
        setIsEditOpen,
        editStudent,
        setEditStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export default StudentContextProvider;
