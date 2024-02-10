"use client";

import React, { useEffect } from "react";
// import { addTask } from "../_utils/actions";
import { addTaskCustom } from "../_utils/actions";

import { useFormStatus, useFormState } from "react-dom";
import toast from "react-hot-toast";

// 分離は必要
const AddButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn btn-primary join-item" disabled={pending}>
      {pending ? "Adding..." : "Add"}
    </button>
  );
};

const initialState = {
  message: null,
};

export default function TaskAddForm() {
  const [state, formAction] = useFormState(addTaskCustom, initialState);

  useEffect(() => {
    if (state.message === "error") {
      toast.error("adding error...");
      return;
    }
    if (state.message === "success") {
      toast.success("add success!!!");
      return;
    }
  }, [state]);

  return (
    <form action={formAction} className="mt-8">
      {/* {state.message && <div className="">{state.message}</div>} */}
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
