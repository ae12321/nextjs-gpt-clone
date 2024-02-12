import RecipeInfo from "@/components/recipe/RecipeInfo";
import { getSingleRecipe } from "@/utils/actions";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function SingleRecipe({ params }) {
  let recipe = await getSingleRecipe(params.id);
  //   console.log(recipe);

  if (!recipe) {
    redirect("/recipes");
  }

  // string to array of string
  recipe = {
    ...recipe,
    steps: JSON.parse(recipe.steps),
  };

  return (
    <div>
      {/* <p>{JSON.stringify(recipe)}</p> */}
      <Link href={"/recipes"} className="btn btn-primary mb-8">
        back to recipe
      </Link>
      <RecipeInfo data={recipe} />
    </div>
  );
}
