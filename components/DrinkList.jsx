import Link from "next/link";
import React from "react";

export default function DrinkList({ drinks }) {
  return (
    <div>
      <ul className="menu menu-vertical">
        {drinks.map((drink, index) => {
          const { idDrink: id, strDrink: name, strDrinkThumb: thumbnail } = drink;
          console.log({ id, name, thumbnail });
          return (
            <li key={id} className="text-xl">
              <Link href={`/server/${id}`}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
