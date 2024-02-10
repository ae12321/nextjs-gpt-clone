import React from "react";
import Link from "next/link";

import DeleteForm from "./DeleteForm";
import EditForm from "./EditForm";

import { getTasks } from "../_utils/actions";

export default async function TaskList() {
  const tasks = await getTasks();

  if (tasks.length === 0) {
    return <h1 className="my-8 font-bold text-lg">no data...</h1>;
  }

  return (
    <div>
      {tasks.map((task) => {
        return (
          <div
            key={task.id}
            className={`
              ${task.completed ? "line-through" : ""}
              w-[500px]
              m-4 p-4
              flex
              justify-between
              items-center
              border
              border-gray-300
              rounded-lg
              shadow-md
            `}
            style={{}}
          >
            {task.content}
            <div className="flex gap-4">
              <EditForm id={task.id} />
              <DeleteForm id={task.id} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
