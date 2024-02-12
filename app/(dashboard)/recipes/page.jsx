import RecipesPage from "@/components/recipe/RecipesPage";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

export default async function RecipesRootPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["recipe", ""],
    queryFn: () => getRecipes(),
  });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <RecipesPage />
      </HydrationBoundary>
    </>
  );
}
