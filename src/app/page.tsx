"use client";

import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#ffffff", 
        color: "#000000", 
        padding: "20px",
        fontFamily: "Arial",
        minHeight: "100vh", 
      }}
    >
      <h1>Lista de tareas</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <div>
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nueva tarea"
          style={{
            marginRight: "10px",
            border: "1px solid #ccc",
            padding: "5px",
            color: "#000000", 
            backgroundColor: "#ffffff", 
          }}
        />
        <button
          onClick={addTask}
          style={{
            backgroundColor: "#0070f3",
            color: "#ffffff",
            padding: "5px 10px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Agregar
        </button>
      </div>
    </div>
  );
}
