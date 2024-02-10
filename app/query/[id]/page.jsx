import React from "react";
import { getTask, updateTask } from "../_utils/actions";
import Link from "next/link";

export default async function Task({ params }) {
  const task = await getTask(params.id);
  console.log({ params });
  return (
    <div>
      <h1>Task</h1>
      <Link href={"/query"} className="btn btn-info">
        back query
      </Link>
      {/* <pre>{JSON.stringify(task, null, 2)}</pre> */}
      <form action={updateTask} className="max-w-md border rounded-lg p-4 flex flex-col">
        <input type="hidden" name="id" value={task.id} />
        <input
          type="text"
          name="content"
          defaultValue={task.content}
          className="input input-bordered w-full mb-4"
        />
        <label htmlFor="completed" className="label cursor-pointer mb-4">
          <span className="label-text">completed</span>
          <input
            type="checkbox"
            id="completed"
            name="completed"
            defaultChecked={task.completed}
            className="checkbox checkbox-primary checkbox-sm"
          />
        </label>
        <button className="btn btn-primary btn-block btn-sm">update</button>
      </form>
    </div>
  );
}
