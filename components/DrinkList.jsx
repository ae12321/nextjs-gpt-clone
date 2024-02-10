import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function DrinkList({ drinks }) {
  return (
    <div>
      <ul className="grid md:grid-cols-2">
        {drinks.map((drink, index) => {
          const { idDrink: id, strDrink: name, strDrinkThumb: thumbnail } = drink;
          console.log({ id, name, thumbnail });
          return (
            <li key={id}>
              <Link href={`/server/${id}`} className="text-xl flex flex-col">
                {name}
                <Image alt={name} src={thumbnail} width={100} height={100} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
