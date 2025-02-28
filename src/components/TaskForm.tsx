import React from "react";

type Props = {
  newTaskTitle: string;
  setNewTaskTitle: (title: string) => void;
  addTask: (e: React.FormEvent) => void;
};

const TaskForm = ({ newTaskTitle, setNewTaskTitle, addTask }: Props) => (
  <form onSubmit={addTask} className="mb-4 flex">
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

export default TaskForm;
