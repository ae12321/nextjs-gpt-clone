import Link from "next/link";
import React from "react";

const links = [
  { href: "/chat", label: "chat" },
  { href: "/recipe", label: "recipe" },
  { href: "/xxx/yyy", label: "yyy" },
  { href: "/profile", label: "profile" },
];

export default function Navbar() {
  return (
    <ul className="menu">
      {links.map(({ href, label }) => {
        return (
          <li key={href}>
            <Link href={href}>{label}</Link>
          </li>
        );
      })}
    </ul>
  );
}
