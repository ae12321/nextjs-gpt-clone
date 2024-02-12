import React from "react";

export default function RecipeInfoPage({ recipe }) {
  return (
    <div>
      <h1>RecipeInfoPage</h1>
      <p>{JSON.stringify(recipe, null, 2)}</p>
    </div>
  );
}
