import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") {
      alert("Please enter a task!");
      return;
    }

    setTasks([...tasks, {
      id: Date.now(),
      text: task,
      completed: false
    }]);

    setTask("");
  };
const toggleTask = (id) => {
  setTasks(
    tasks.map((item) =>
      item.id === id
        ? { ...item, completed: !item.completed }
        : item
    )
  );
};
const deleteTask = (id) => {
  setTasks(tasks.filter((item) => item.id !== id));
};
  return (
    <div className="container">
      <h1>My Todo Application</h1>
      <p>Manage your daily tasks easily!</p>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter your task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="task-list">
        {tasks.map((item) => (
          <div key={item.id}>
  <input
    type="checkbox"
    checked={item.completed}
    onChange={() => toggleTask(item.id)}
  />

  <span
    style={{
      textDecoration: item.completed ? "line-through" : "none",
      marginLeft: "10px"
    }}
  >
    {item.text}
  </span>
  <button onClick={() => deleteTask(item.id)}>
  Delete
</button>
</div>
        ))}
      </div>
    </div>
  );
}

export default App;