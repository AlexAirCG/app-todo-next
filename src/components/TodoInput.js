import React from "react";
import { MdOutlineLibraryAdd } from "react-icons/md";

function TodoInput() {
  return (
    <div className="flex mt-2">
      <input
        className="border border-gray-500 dark:text-gray-200 w-full rounded-md p-2 mr-3"
        type="text"
        placeholder="введите задачу"
      />
      <button>
        <MdOutlineLibraryAdd className="text-3xl cursor-pointer hover:text-gray-400" />
      </button>
    </div>
  );
}

export default TodoInput;
