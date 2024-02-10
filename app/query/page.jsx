import React from "react";
// import TaskAddForm from "./_components/TaskAddForm";
import TaskAddFormVer2 from "./_components/TaskAddFormVer2";
import TaskList from "./_components/TaskList";

export const dynamic = "force-dynamic";

export default async function QueryPage() {
  return (
    <div>
      <h1 className="text-5xl">QueryPage</h1>
      <TaskAddFormVer2 />
      <TaskList />
    </div>
  );
}
