import React, { useState } from "react";

function TodoApp({ addTask }) {
  // State for form inputs
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [priority, setPriority] = useState("Medium");

  // Handle form submission
  const handleAddTask = () => {
    if (!taskName || !taskDescription || !priority) {
      alert("Please fill out all fields before adding a task.");
      return;
    }

    // Create a new task object with default progress as 'Not Started'
    const newTask = {
      tName: taskName,
      tDescription: taskDescription,
      priority: priority,
      progress: "Not Started",
    };

    // Call the addTask function from the parent to add the new task
    addTask(newTask);

    // Clear the form inputs after adding the task
    setTaskName("");
    setTaskDescription("");
    setPriority("Medium");
  };

  return (
    <>
      <div className="container">
        <div className="row g-2 mt-5">
          <div className="col-2">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingInputGrid"
                placeholder="Task Name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)} // Update state on input change
              />
              <label htmlFor="floatingInputGrid">Task Name</label>
            </div>
          </div>
          <div className="col-md">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingInputGrid"
                placeholder="Task Description"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)} // Update state on input change
              />
              <label htmlFor="floatingInputGrid">Task Description</label>
            </div>
          </div>
          <div className="col-2">
            <div className="form-floating">
              <select
                className="form-select"
                id="floatingSelectGrid"
                value={priority}
                onChange={(e) => setPriority(e.target.value)} // Update state on selection change
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
              <label htmlFor="floatingSelectGrid">Priority</label>
            </div>
          </div>
        </div>
        <div className="text-center m-4">
          <button className="btn btn-success" onClick={handleAddTask}>
            Add Task
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoApp;
