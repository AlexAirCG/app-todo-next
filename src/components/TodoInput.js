"use client";

import React, { useState } from "react";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { mutate } from "swr";

function TodoInput() {
  const [todo, setTodo] = useState("");
  const [category, setCategory] = useState("leisure");
  const [seted, setSeted] = useState({
    work: false,
    study: false,
    personal: false,
    leisure: true,
  });

  const createTodo = async () => {
    if (!todo) {
      alert("type something");
      return;
    }
    await fetch("/api/todo", {
      method: "POST",
      body: JSON.stringify({
        title: todo,
        category: category,
      }),
    });
    setTodo("");
    mutate("/api/todo");
  };

  const handleEnter = (e) => {
    if (e.code == "Enter") {
      createTodo();
    }
  };

  const handleSeted = (e) => {
    setCategory(e.target.id);
    const newSteted = {
      work: false,
      study: false,
      personal: false,
      leisure: false,
    };
    newSteted[e.target.id] = true;
    setSeted(newSteted);
  };

  return (
    <div>
      <div className="flex mt-2">
        <input
          className="border border-gray-500 dark:text-gray-200 w-full rounded-md p-2 mr-3"
          type="text"
          placeholder="введите задачу"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onKeyUp={(e) => handleEnter(e)}
        />
        <button>
          <MdOutlineLibraryAdd
            onClick={createTodo}
            className="text-3xl cursor-pointer hover:text-gray-400"
          />
        </button>
      </div>
      <div className="flex justify-between mt-2">
        <div className="flex items-center gap-2">
          <input
            id="work"
            type="radio"
            name="category"
            className={`${seted.work ? "border-3" : ""} appearance-none w-4 h-4 bg-green-400 rounded-full cursor-pointer`}
            onChange={(e) => handleSeted(e)}
          />
          <span>Вещи</span>
        </div>
        <div className="flex items-center gap-2">
          <input
            id="study"
            type="radio"
            name="category"
            className={`${seted.study ? "border-3" : ""} appearance-none w-4 h-4 bg-red-400 rounded-full cursor-pointer`}
            onChange={(e) => handleSeted(e)}
          />
          <span>Аптека</span>
        </div>
        <div className="flex items-center gap-2">
          <input
            id="personal"
            type="radio"
            name="category"
            className={`${seted.personal ? "border-3" : ""} appearance-none w-4 h-4 bg-blue-400 rounded-full cursor-pointer`}
            onChange={(e) => handleSeted(e)}
          />
          <span>Для дома</span>
        </div>
        <div className="flex items-center gap-2">
          <input
            id="leisure"
            type="radio"
            name="category"
            className={`${seted.leisure ? "border-3" : ""} appearance-none w-4 h-4 bg-yellow-400 rounded-full cursor-pointer`}
            onChange={(e) => handleSeted(e)}
          />
          <span>Продукты</span>
        </div>
      </div>
    </div>
  );
}

export default TodoInput;
