import React from "react";
import useTaskStore from "../../store/taskStore";

const TaskForm = () => {
  const addTask = useTaskStore((state) => state.addTask);
  const newTaskTitle = useTaskStore((state) => state.newTaskTitle);
  const setNewTaskTitle = useTaskStore((state) => state.setNewTaskTitle);

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask();
  };

  return (
    <form onSubmit={handleAddTask} className="mb-4 flex">
      <input
        type="text"
        placeholder="New task..."
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
        className="flex-grow border rounded-l py-2 px-3"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 rounded-r">
        Add
      </button>
    </form>
  );
};

export default TaskForm;
