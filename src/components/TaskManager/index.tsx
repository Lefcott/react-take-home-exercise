import React from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import TaskFilter from "./TaskFilter";

const TaskManager = () => (
  <div className="container mx-auto bg-white p-4 rounded shadow">
    <TaskForm />
    <TaskFilter />
    <TaskList />
  </div>
);

export default TaskManager;
