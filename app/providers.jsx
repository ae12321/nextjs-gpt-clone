"use client";

import React from "react";
import { Toaster } from "react-hot-toast";

export default function Providers({ children }) {
  return (
    <>
      <Toaster />
      <h1>providers</h1>
      {children}
    </>
  );
}
