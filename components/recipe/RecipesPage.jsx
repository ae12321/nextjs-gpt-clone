"use client";

import { useState } from "react";
import RecipeList from "./RecipeList";
import { useQuery } from "@tanstack/react-query";
import { getRecipes } from "@/utils/actions";

export default function RecipesPage() {
  const [searchValue, setSearchValue] = useState("");

  const { data, isPending } = useQuery({
    queryKey: ["recipes", searchValue],
    queryFn: () => getRecipes(searchValue),
  });

  //   if (isPending) return <span className="loading loading-lg"></span>;

  //   console.log(data);
  return (
    <div>
      <form className="mb-12">
        <div className="join w-full">
          <input
            type="text"
            placeholder="word.."
            className="input join-item w-full"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            className="btn btn-primary"
            disabled={isPending}
            onClick={() => setSearchValue("")}
          >
            reset
          </button>
        </div>
      </form>
      {data && <RecipeList data={data} />}
    </div>
  );
}
