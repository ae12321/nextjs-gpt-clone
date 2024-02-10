"use client";

import React from "react";
// import { addTask } from "../_utils/actions";
import { addTaskCustom } from "../_utils/actions";

import { useFormStatus } from "react-dom";

// 分離は必要
const AddButton = () => {
  const { pending } = useFormStatus();
  console.log({ pending });
  return (
    <button type="submit" className="btn btn-primary join-item" disabled={pending}>
      {pending ? "Adding..." : "Add"}
    </button>
  );
};

export default function TaskAddForm() {
  const { pending } = useFormStatus();
  console.log(pending);

  return (
    <form action={addTaskCustom} className="mt-8">
      <div className="w-[500px] join">
        <input
          type="text"
          name="content"
          className="input input-bordered join-item"
          placeholder="enter..."
          required
        />
        <AddButton />
      </div>
    </form>
  );
}
