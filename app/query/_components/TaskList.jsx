import React from "react";
import prisma from "../../../utils/db";
import Link from "next/link";

const getTasks = async () => {
  return prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

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
              <Link href={`/query/${task.id}`} className="btn btn-info btn-sm">
                edit
              </Link>
              <Link href={""} className="btn btn-secondary btn-sm">
                delete
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
