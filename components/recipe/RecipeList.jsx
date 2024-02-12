import React from "react";
import RecipeCard from "./RecipeCard";

export default function RecipeList({ data }) {
  console.log(data);
  if (data.length === 0) return <h2 className="text-sm">no recipe found...</h2>;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {data.map((recipe) => {
        console.log(recipe);
        return <RecipeCard key={recipe.id} recipe={recipe} />;
      })}
    </div>
  );
}
