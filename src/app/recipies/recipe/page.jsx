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
      <div className="flex md:flex-row flex-col  my-8">
        <div className="md:w-1/2 w-full">
          <RecipeThumbnail />
        </div>
        <div className="my-8 md:my-0 md:px-8 px-4">
          <RecipeDescription />
          <RecipeInformations />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 my-8">
        <div className="w-1/2 md:px-0 px-4">
          <RecipeIngredients />
        </div>
        <div className="md:w-1/2 w-full  md:px-0 px-4">
          <RecipeDetails />
        </div>
      </div>
      <div className="mb-12 md:px-0 px-4">
        <RecipeInstructions />
      </div>
    </main>
  );
}
