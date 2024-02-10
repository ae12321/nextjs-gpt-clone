"use client";

import React from "react";

export default function error(error) {
  return (
    <div>
      <h1>error...</h1>
      <h2>{error.error.message}</h2>
    </div>
  );
}
