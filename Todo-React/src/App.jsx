import { useState } from 'react';
import './App.css';
import Navbar from "./Navbar";
import TodoApp from './TodoApp'; // Ensure this import is correct
import Table from "./Table";

function App() {
  const [tasks, setTasks] = useState([
    { tName: "Study", tDescription: "Complete project report", priority: "High", progress: "In Progress" },
    { tName: "Workout", tDescription: "Morning exercises", priority: "Medium", progress: "Not Started" },
    { tName: "Grocery", tDescription: "Buy weekly groceries", priority: "Low", progress: "Completed" }
  ]);

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <>
      <Navbar />
      <TodoApp addTask={addTask} />
      <Table rows={tasks} setRows={setTasks} /> {/* Ensure you're passing the tasks correctly */}
    </>
  );
}

export default App;
