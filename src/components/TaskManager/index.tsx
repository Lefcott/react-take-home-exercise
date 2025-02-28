import React, { useState } from "react";
import { Task } from "../../types/task";
import { Filter } from "../../types/filter";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import TaskFilter from "./TaskFilter";

const TaskManager = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Buy groceries", completed: false },
    { id: 2, title: "Clean the house", completed: true },
  ]);
  const [filter, setFilter] = useState<Filter>("all");
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed === true;
    if (filter === "pending") return task.completed === false;
    return true;
  });

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTaskTitle.trim() === "") return;
    const newTask: Task = {
      id: tasks.length + 1,
      title: newTaskTitle,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setNewTaskTitle("");
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="container mx-auto bg-white p-4 rounded shadow">
      <TaskForm
        newTaskTitle={newTaskTitle}
        setNewTaskTitle={setNewTaskTitle}
        addTask={handleAddTask}
      />
      <TaskFilter currentFilter={filter} setFilter={setFilter} />
      <TaskList
        tasks={filteredTasks}
        onDelete={handleDeleteTask}
        onToggle={toggleTaskCompletion}
      />
    </div>
  );
};

export default TaskManager;
