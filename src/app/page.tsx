import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState<string[]>([
    "Primera tarea",
    "Segunda tarea",
    "Tercera tarea",
  ]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>Lista de tareas</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            - {task}
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Nueva tarea"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        style={{
          padding: "8px",
          marginRight: "10px",
          border: "1px solid #ccc",
        }}
      />
      <button
        onClick={handleAddTask}
        style={{
          padding: "8px 12px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Agregar tarea
      </button>
    </div>
  );
}
