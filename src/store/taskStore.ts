import { create } from "zustand";
import { Filter } from "../types/filter";

type TaskStore = {
  currentFilter: Filter;
  setFilter: (filter: Filter) => void;
};

const useTaskStore = create<TaskStore>()((set) => ({
  currentFilter: "all",
  setFilter: (filter: Filter) => set(() => ({ currentFilter: filter })),
}));

export default useTaskStore;
