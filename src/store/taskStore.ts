import { create } from "zustand";
import { Filter } from "../types/filter";
import { Task } from "../types/task";

type TaskStore = {
  tasks: Task[];
  currentFilter: Filter;
  newTaskTitle: string;
  addTask: () => void;
  deleteTask: (id: number) => void;
  toggleTaskCompletion: (id: number) => void;
  setFilter: (filter: Filter) => void;
  setNewTaskTitle: (title: string) => void;
};

const useTaskStore = create<TaskStore>()((set) => ({
  tasks: [
    { id: 1, title: "Buy groceries", completed: false },
    { id: 2, title: "Clean the house", completed: true },
  ],
  currentFilter: "all",
  newTaskTitle: "",
  addTask: () =>
    set((state) => {
      if (state.newTaskTitle.trim() === "") return state;
      return {
        newTaskTitle: "",
        tasks: [
          ...state.tasks,
          {
            id: state.tasks.length + 1,
            title: state.newTaskTitle,
            completed: false,
          },
        ],
      };
    }),
  deleteTask: (id: number) =>
    set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) })),
  toggleTaskCompletion: (id: number) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    })),
  setFilter: (filter: Filter) => set(() => ({ currentFilter: filter })),
  setNewTaskTitle: (title: string) => set(() => ({ newTaskTitle: title })),
}));

export default useTaskStore;
