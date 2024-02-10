"use client";

import React, { useState } from "react";

export default function ClientPage() {
  const [count, setCount] = useState(0);
  console.log("count");

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1 className="mb-4">ClientPage</h1>
      <p className="text-3xl font-bold mb-4">{count}</p>
      <button className="btn btn-secondary" onClick={increment}>
        Increment
      </button>
    </div>
  );
}
