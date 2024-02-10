import DrinkList from "../../components/DrinkList";
import React from "react";

// api sample: https://www.thecocktaildb.com/api.php

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchDrinks = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data.drinks;
};

export default async function ServerPage() {
  const drinks = await fetchDrinks();

  return (
    <div>
      <h1 className="text-5xl">ServerPage</h1>
      <DrinkList drinks={drinks} />
    </div>
  );
}
