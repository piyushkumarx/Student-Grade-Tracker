import React, { useContext } from "react";
import "./Delete.css";
import StudentContext from "./Context";

function DeleteModal() {
  const { confirmDelete, closeDeleteBox } = useContext(StudentContext);

  return (
    <div className="delete-overlay">
      <div className="delete-modal-box" onClick={(e) => e.stopPropagation()}>
        <h3>Delete Task?</h3>
        <p className="delete-bio">
          Are you sure you want to delete? This action cannot be undone.
        </p>

        <div className="edit-task-buttons">
          <button
            className="delete-button cancel-button"
            onClick={closeDeleteBox}
          >
            Cancel
          </button>
          <button
            className="delete-button delete-button-red"
            onClick={confirmDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
