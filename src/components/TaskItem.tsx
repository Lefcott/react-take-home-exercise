import React from "react";
import { Task } from "../types/task";

type Props = {
  task: Task;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
};

const TaskItem = ({ task, onDelete, onToggle }: Props) => {
  return (
    <li className="flex items-center justify-between border-b py-2">
      <span
        onClick={() => onToggle(task.id)}
        className={`cursor-pointer ${
          task.completed ? "text-black" : "line-through text-green-500"
        }`}
      >
        {task.title}
      </span>

      <button
        onClick={() => onDelete(task.id)}
        className="bg-[red] text-white px-2 py-1 rounded"
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
