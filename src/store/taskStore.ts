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
  tasks: [
    { id: 1, title: "Buy groceries", completed: false },
    { id: 2, title: "Clean the house", completed: true },
  ],
  currentFilter: "all",
  addTask: (title: string) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        { id: state.tasks.length + 1, title, completed: false },
      ],
    })),
  deleteTask: (id: number) =>
    set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) })),
  toggleTaskCompletion: (id: number) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    })),
  setFilter: (filter: Filter) => set(() => ({ currentFilter: filter })),
}));

export default useTaskStore;
