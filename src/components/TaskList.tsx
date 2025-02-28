import React from "react";
import { Task } from "../types/task";
import TaskItem from "./TaskItem";

type Props = {
  tasks: Task[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
};

const TaskList = ({ tasks, onDelete, onToggle }: Props) => (
  <ul>
    {tasks.map((task) => (
      <TaskItem
        key={task.id}
        task={task}
        onDelete={onDelete}
        onToggle={onToggle}
      />
    ))}
  </ul>
);

export default TaskList;
