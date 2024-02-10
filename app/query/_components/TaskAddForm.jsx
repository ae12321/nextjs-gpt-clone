import React from "react";
import { addTask } from "../_utils/actions";

export default function TaskAddForm() {
  return (
    <form action={addTask} className="mt-8">
      <div className="w-[500px] join">
        <input
          type="text"
          name="content"
          className="input input-bordered join-item"
          placeholder="enter..."
          required
        />
        <button type="submit" className="btn btn-primary join-item">
          add
        </button>
      </div>
    </form>
  );
}
