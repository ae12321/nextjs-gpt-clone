import React from "react";
import TaskAddForm from "./_components/TaskAddForm";
import TaskList from "./_components/TaskList";

export default async function QueryPage() {
  return (
    <div>
      <h1 className="text-5xl">QueryPage</h1>
      <TaskAddForm />
      <TaskList />
    </div>
  );
}
