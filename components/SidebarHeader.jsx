"use client";
import { WiMoonAltWaningGibbous2 } from "react-icons/wi";
import { WiMoonAltWaxingCrescent2 } from "react-icons/wi";
import { FaMoon, FaRegSun } from "react-icons/fa";

import React, { useState } from "react";
import { FaRobot } from "react-icons/fa";

export default function SidebarHeader() {
  return (
    <div className="flex items-center gap-4 px-4 mb-4">
      <FaRobot className="w-8 h-8 text-primary" />
      <h2 className="text-primary text-xl font-extrabold">GPT Clone</h2>
      <ThemeToggle />
    </div>
  );
}

function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <button className="btn btn-primary btn-sm mx-auto" onClick={toggleTheme}>
      {theme === "light" ? (
        <FaRegSun className="w-8 h-8" />
      ) : (
        <FaMoon className="w-8 h-8" />
      )}
    </button>
  );
}
