"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import {
  createNewRecipe,
  generateRecipeResponse,
  getExistingRecipe,
} from "@/utils/actions";
import RecipeCard from "@/components/recipe/RecipeCard";

export default function RecipePage() {
  const queryClient = useQueryClient();

  const { mutate, isPending, data } = useMutation({
    mutationFn: async ({ food1, food2 }) => {
      // check existing data in table, before send to openai
      const existingRecipe = await getExistingRecipe({ food1, food2 }); // existingRecipe or null
      if (existingRecipe) return existingRecipe;
      // generate recipe data
      const recipeData = await generateRecipeResponse({ food1, food2 });
      if (recipeData) {
        await createNewRecipe(recipeData);
        // revalidate
        queryClient.invalidateQueries({ queryKey: ["recipe"] });
        return recipeData;
      }
      // on error
      toast.error("no match recipe data...");
      return null;
    },
  });

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // formからデータを取得する方法
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    mutate(data);
  };

  if (isPending) {
    return <span className="loading loading-lg"></span>;
  }

  console.log({ data, isPending });

  return (
    <>
      <div>
        {/*  */}
        <form onSubmit={handleSubmit} className="w-full join">
          <div className="join">
            <input
              type="text"
              placeholder="food1"
              className="input w-full join-item"
              name="food1"
              required
            />
            <input
              type="text"
              placeholder="food2"
              name="food2"
              className="input w-full join-item"
              required
            />
            <button type="submit" className="btn btn-primary join-item">
              search
            </button>
          </div>
        </form>
        <div>{JSON.stringify(data, null, 2)}</div>
        <div className="grid grid-cols-2">
          <RecipeCard
            recipe={{ id: 111, title: "ham egg", food1: "ham", food2: "egg" }}
          />
          <RecipeCard
            recipe={{ id: 111, title: "ham egg", food1: "ham", food2: "egg" }}
          />
        </div>
      </div>
    </>
  );
}
