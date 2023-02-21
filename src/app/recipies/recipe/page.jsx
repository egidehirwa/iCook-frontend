import RecipeDescription from "@/components/recipeDescription";
import RecipeInformations from "@/components/recipeInformations";
import RecipeIngredients from "@/components/recipeIngredients";
import RecipeInstructions from "@/components/recipeInstructions";
import RecipeDetails from "@/components/recipeDetails";
import RecipeThumbnail from "@/components/recipeThumbnail";

export default function Recipe() {
  return (
    <main className="container mx-auto">
      <h1 className="text-4xl font-bold">Recipe Title</h1>
      <div className="flex flex-row my-8">
        <RecipeThumbnail />
        <div>
          <RecipeDescription />
          <RecipeInformations />
        </div>
      </div>
      <div className="flex flex-row gap-4 my-8">
        <div className="w-1/2">
          <RecipeIngredients />
        </div>
        <div className="w-1/2 ">
          <RecipeDetails />
        </div>
      </div>
      <div className="mb-12">
        <RecipeInstructions />
      </div>
    </main>
  );
}
