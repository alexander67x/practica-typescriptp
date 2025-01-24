"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [tasks, setTasks] = useState<{ id: number; title: string }[]>([]);
  const [newTask, setNewTask] = useState("");


  const addTask = async (title: string) => {
    const response = await fetch("/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });
    if (!response.ok) {
      throw new Error("Failed to add task");
    }
    return response.json();
  };

  const handleAddTask = async () => {
    if (newTask.trim() !== "") {
      try {
        const createdTask = await addTask(newTask);
        setTasks((prev) => [...prev, createdTask]); 
        setNewTask("");
      } catch (error) {
        console.error("Error adding task:", error);
      }
    }
  };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("/api/tasks");
        if (!response.ok) {
          throw new Error(`Failed to fetch tasks: ${response.status}`);
        }
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

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
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
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
          onClick={handleAddTask}
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
