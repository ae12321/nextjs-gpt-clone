"use client";
import React, { useEffect } from "react";
// import { deleteTask } from "../_utils/actions";
import { deleteTaskCustom } from "../_utils/actions";
import { useFormState, useFormStatus } from "react-dom";
import toast from "react-hot-toast";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button className="btn btn-secondary btn-sm" disabled={pending}>
      {pending ? "Deleting..." : "Delete"}
    </button>
  );
};

const initialState = {
  message: null,
};

export default function DeleteForm({ id }) {
  const [state, formAction] = useFormState(deleteTaskCustom, initialState);
  console.log(state);
  useEffect(() => {
    console.log(state.message);
    if (state.message === "error") {
      toast.error("deleting error...");
      return;
    }
    if (state.message === "success") {
      // add時のようにやったがうまくいなかい。。。
      toast.success("delete success!!!");
      return;
    }
  }, [state]);

  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={id} />
      <SubmitButton />
    </form>
  );
}
