"use client";

import RecipeList from "@/components/recipe/RecipeList";
import { getRecipes } from "@/utils/actions";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
  useQuery,
} from "@tanstack/react-query";
import React from "react";

export default function RecipesPage() {
  const queryClient = new QueryClient();
  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Main />
      </HydrationBoundary>
    </>
  );
}

function Main() {
  const { data, isPending } = useQuery({
    queryKey: ["recipe"],
    queryFn: () => getRecipes(),
  });

  if (isPending) return <span className="loading loading-lg"></span>;

  return (
    <div>
      <RecipeList data={data} />
      {/* <p>{JSON.stringify(data)}</p> */}
    </div>
  );
}
