"use client";

import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";

function TodoList() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="">
      <div
        id="todoBox"
        className={`${checked ? "border-green-400 text-green-400 line-through" : ""} flex items-center border border-gray-400 mt-3 w-full p-2 rounded justify-between`}
      >
        <div className="flex items-center mr-4">
          <input
            checked={checked}
            id="green-checkbox"
            type="checkbox"
            value=""
            className={`${checked ? "bg-green-400" : ""} rounded-full w-6 h-6 appearance-none border mr-4 cursor-pointer hover:border-green-400`}
            onChange={() => setChecked(!checked)}
          />
          <span>Todo</span>
        </div>

        <div className="flex items-center gap-3">
          <button>
            <RiDeleteBin6Line className="text-2xl cursor-pointer hover:text-red-400" />
          </button>
          <button>
            <GrEdit className="text-2xl cursor-pointer hover:text-blue-400" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
