"use client";

import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

function TodoList() {
  const [checked, setChecked] = useState(false);
  const [todos, setTodos] = useState(["todo1", "todo2", "todo3", "todo4"]);
  const { data, error } = useSWR("/api/todo", fetcher);

  console.log(data?.todos, error);

  const category = {
    work: "green-400",
    study: "red-400",
    personal: "blue-400",
    leisure: "yellow-400",
  };

  return (
    <>
      {data?.todos.map((todo, index) => (
        <div
          key={todo.id}
          id="todoBox"
          className={`${checked ? "border-green-400 text-green-400 line-through" : ""} flex items-center border border-gray-400 mt-4 w-full p-2 rounded justify-between`}
        >
          <div className="flex items-center mr-4">
            <input
              checked={todo.completed}
              id="green-checkbox"
              type="checkbox"
              value=""
              className={`${checked ? "bg-green-400" : ""} rounded-full w-6 h-6 appearance-none border mr-4 cursor-pointer hover:border-green-400`}
              onChange={() => setChecked(!checked)}
            />
            <span>{todo.title}</span>
          </div>

          <div className="">
            <div className="flex items-center gap-3">
              <span
                className={`${checked ? "bg-green-400" : `bg-${category[todo.category]} `} w-3 h-3 rounded-full`}
              ></span>
              <button>
                <RiDeleteBin6Line className="text-2xl cursor-pointer hover:text-red-400" />
              </button>
              <button>
                <GrEdit className="text-2xl cursor-pointer hover:text-blue-400" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default TodoList;
