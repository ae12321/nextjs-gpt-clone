import Link from "next/link";
import React from "react";

export default function RecipeCard({ recipe }) {
  const { id, food1, food2 } = recipe;
  return (
    <Link
      href={`/recipe/${id}`}
      className="card card-compact rounded-xl bg-blue-200"
    >
      <div className="card-body items-center">
        <h2 className="card-title">
          {food1} / {food2}
        </h2>
      </div>
    </Link>
  );
}
