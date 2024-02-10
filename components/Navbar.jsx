import Link from "next/link";
import React from "react";

const links = [
  { href: "/about", label: "about" },
  { href: "/client", label: "client" },
  { href: "/server", label: "server" },
  { href: "/query", label: "query" },
  { href: "/tasks", label: "tasks" },
];

export default function Navbar() {
  return (
    <nav className="bg-base-300 py-4">
      <div className="navbar px-8 max-w-5xl mx-auto flex-col sm:flex-row">
        <Link href={"/"} className="btn btn-primary">
          sample1
        </Link>
        <ul className="menu menu-horizontal ml-8 sm:ml-0">
          {links.map(({ href, label }) => (
            <li key={label}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
