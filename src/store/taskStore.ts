import { create } from "zustand";
import { Filter } from "../types/filter";
import { Task } from "../types/task";

type TaskStore = {
  tasks: Task[];
  currentFilter: Filter;
  addTask: (title: string) => void;
  deleteTask: (id: number) => void;
  toggleTaskCompletion: (id: number) => void;
  setFilter: (filter: Filter) => void;
};

const useTaskStore = create<TaskStore>()((set) => ({
  tasks: JSON.parse(localStorage.getItem("tasks") || "null") || [
    { id: 1, title: "Buy groceries", completed: false },
    { id: 2, title: "Clean the house", completed: true },
  ],
  currentFilter: "all",
  addTask: (title: string) =>
    set((state) => {
      const updatedTasks = [
        ...state.tasks,
        { id: state.tasks.length + 1, title, completed: false },
      ];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return {
        tasks: updatedTasks,
      };
    }),
  deleteTask: (id: number) =>
    set((state) => {
      const updatedTasks = state.tasks.filter((task) => task.id !== id);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return { tasks: updatedTasks };
    }),
  toggleTaskCompletion: (id: number) =>
    set((state) => {
      const updatedTasks = state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return {
        tasks: updatedTasks,
      };
    }),
  setFilter: (filter: Filter) => set(() => ({ currentFilter: filter })),
}));

export default useTaskStore;
