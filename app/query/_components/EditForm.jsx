import Link from "next/link";
import React from "react";

export default function EditForm({ id }) {
  return (
    <div>
      <Link href={`/query/${id}`} className="btn btn-info btn-sm">
        edit
      </Link>
    </div>
  );
}
