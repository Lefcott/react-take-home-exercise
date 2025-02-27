import React from "react";

const TaskItem = ({ task, onDelete, onToggle }: any) => {
  return (
    <li className="flex items-center justify-between border-b py-2">
      <span
        onClick={() => onToggle(task.id)}
        className={`cursor-pointer ${
          task.isCompleted ? "text-black" : "line-through text-green-500"
        }`}
      >
        {task.title}
      </span>

      <button
        onClick={() => onDelete(task.id)}
        className="bg-[red] text-white px-2 py-1"
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
