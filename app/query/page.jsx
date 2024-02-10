import prisma from "@/utils/db";
import React from "react";
import TaskAddForm from "./_components/TaskAddForm";
import TaskList from "./_components/TaskList";

const handlers = async () => {
  // create
  await prisma.task.create({
    data: {
      content: "hello world, " + new Date().toISOString(),
    },
  });
  // show all tasks
  const tasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return tasks;
};

export default async function QueryPage() {
  const tasks = await handlers();

  return (
    <div>
      <h1 className="text-5xl">QueryPage</h1>
      <TaskAddForm />
      <TaskList />
    </div>
  );
}
