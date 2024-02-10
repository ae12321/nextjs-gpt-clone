import Link from "next/link";
import React from "react";
import { deleteTask } from "../_utils/actions";

export default function DeleteForm({ id }) {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <button className="btn btn-secondary btn-sm">delete</button>
    </form>
  );
}
