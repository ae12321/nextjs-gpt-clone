"use client";

import { useMutation } from "@tanstack/react-query";
import { generateRecipeContext } from "../_action/prompt";
import { generateRecipeResponse } from "../_action/action";
import toast from "react-hot-toast";

export default function RecipePage() {
  //
  const { mutate, isPending, data } = useMutation({
    mutationFn: async ({ food1, food2 }) => {
      const recipeData = await generateRecipeResponse({ food1, food2 });
      if (recipeData) return recipeData;
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

  console.log(data);

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
        <div>{}</div>
        <div>
          <ul>
            <li>adsf</li>
            <li>adsf</li>
            <li>adsf</li>
            <li>adsf</li>
          </ul>
        </div>
      </div>
    </>
  );
}
