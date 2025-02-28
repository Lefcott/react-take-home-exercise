import React from "react";
import { Task } from "../../../types/task";
import useTaskStore from "../../../store/taskStore";

type Props = {
  task: Task;
};

const TaskItem = ({ task }: Props) => {
  const toggleTaskCompletion = useTaskStore(
    (state) => state.toggleTaskCompletion
  );
  const deleteTask = useTaskStore((state) => state.deleteTask);

  return (
    <li className="flex items-center justify-between border-b py-2">
      <span
        onClick={() => toggleTaskCompletion(task.id)}
        className={`cursor-pointer ${
          task.completed ? "line-through text-green-500" : "text-black"
        }`}
      >
        {task.title}
      </span>

      <button
        onClick={() => deleteTask(task.id)}
        className="bg-[red] text-white px-2 py-1 rounded"
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
