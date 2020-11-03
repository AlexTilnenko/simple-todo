import React, { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Create todo",
      completed: true,
    },
    {
      id: 2,
      text: "Finish first task",
      completed: false,
    },
  ]);

  function toggleTask(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      })
    );
  }

  function removeTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function addTask(text) {
    setTasks(
      tasks.concat([{
         id: Date.now(),
         text,
         completed: false,
       }])
    );
    console.log(tasks);
  }

  return (
    <div className="todo">
      <h3 className="todo__header">Список задач</h3>
      <AddTask addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} removeTask={removeTask} />
    </div>
  );
}

export default App;
