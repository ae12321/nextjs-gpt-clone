import Link from "next/link";
import React from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const fetchDrink = async (id) => {
  const response = await fetch(url + id);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  const drink = data.drinks[0];
  return {
    id: drink.idDrink,
    name: drink.strDrink,
    thumbnail: drink.strDrinkThumb,
  };
};

//
export default async function DrinkPage({ params }) {
  const data = await fetchDrink(params.id);
  console.log(data);
  return (
    <div>
      <Link href={"/server"} className="btn btn-primary">
        back to server
      </Link>
      <h1 className="text-5xl">DrinkPage</h1>
      <p>{data.id}</p>
      <p>{data.name}</p>
      <p>{data.thumbnail}</p>
    </div>
  );
}
