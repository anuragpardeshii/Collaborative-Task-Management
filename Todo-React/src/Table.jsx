import React, { useState } from "react";
import Modal from "./Modal"; // Import your modal component

function createData(tName, tDescription, priority, progress) {
  return { tName, tDescription, priority, progress };
}

function Table({ rows, setRows }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({
    tName: "",
    tDescription: "",
    priority: "Medium",
    progress: "Not Started",
  });

  // Handle form changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Open modal and prefill form data for editing
  const handleEdit = (index) => {
    setEditIndex(index);
    const rowToEdit = rows[index];
    setFormData(rowToEdit);
    setIsModalOpen(true); // Open the modal
  };

  // Handle form submission (for updating task)
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    console.log("Form Submitted", formData); // Debugging: Check if the form submits correctly

    // Check if formData is populated correctly
    if (!formData.tName || !formData.tDescription) {
      alert("Task name and description are required");
      return;
    }

    const updatedRows = rows.map((row, index) =>
      index === editIndex ? formData : row
    );
    setRows(updatedRows); // Update rows with the edited data
    setIsModalOpen(false); // Close the modal after saving
  };

  // Delete task
  const handleDelete = (index) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
  };

  return (
    <>
      <div className="container border">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S.no</th>
              <th scope="col">Task Name</th>
              <th scope="col">Task Description</th>
              <th className="text-center" scope="col">Priority</th>
              <th className="text-center" scope="col">Progress</th>
              <th className="text-center" scope="col">Update</th>
              <th className="text-center" scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{row.tName}</td>
                <td>{row.tDescription}</td>
                <td className="text-center">
                  <button
                    style={{ minWidth: "5rem" }}
                    className={`btn p-0 ps-2 pe-2 ${
                      row.priority === "High"
                        ? "btn-danger"
                        : row.priority === "Medium"
                        ? "btn-warning"
                        : "btn-success"
                    }`}
                  >
                    {row.priority}
                  </button>
                </td>
                <td className="text-center">
                  <button
                    style={{ minWidth: "4rem" }}
                    className={`btn p-0 ps-2 pe-2 ${
                      row.progress === "In Progress"
                        ? "btn-primary"
                        : row.progress === "Completed"
                        ? "btn-success"
                        : "btn-danger"
                    }`}
                  >
                    {row.progress}
                  </button>
                </td>
                <td className="text-center">
                  <i
                    className="fa-regular fa-pen-to-square"
                    onClick={() => handleEdit(index)}
                    style={{ cursor: "pointer" }}
                  ></i>
                </td>
                <td className="text-center">
                  <i
                    className="fa-solid fa-trash-can"
                    onClick={() => handleDelete(index)}
                    style={{ cursor: "pointer" }}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Editing */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h5>Edit Task</h5>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="tName" className="form-label">
              Task Name
            </label>
            <input
              type="text"
              className="form-control"
              id="tName"
              name="tName"
              value={formData.tName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tDescription" className="form-label">
              Task Description
            </label>
            <input
              type="text"
              className="form-control"
              id="tDescription"
              name="tDescription"
              value={formData.tDescription}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="priority" className="form-label">
              Priority
            </label>
            <select
              className="form-select"
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={handleInputChange}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="progress" className="form-label">
              Progress
            </label>
            <select
              className="form-select"
              id="progress"
              name="progress"
              value={formData.progress}
              onChange={handleInputChange}
            >
              <option value="Not Started">Not Started</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Save Changes
          </button>
        </form>
      </Modal>
    </>
  );
}

export default Table;
