import React from "react";
import { Filter } from "../../types/filter";
import useTaskStore from "../../store/taskStore";

const TaskFilter = () => {
  const { currentFilter, setFilter } = useTaskStore();
  const filters: Filter[] = ["all", "completed", "pending"];

  return (
    <div className="flex justify-around mb-4">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setFilter(filter)}
          className={`text-gray-700 ${
            currentFilter === filter ? "font-bold" : ""
          }`}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default TaskFilter;
