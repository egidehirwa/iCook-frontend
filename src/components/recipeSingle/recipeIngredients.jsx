import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";

export default function RecipeIngredients() {
  return (
    <div className="p-8 bg-grey rounded-md">
      <h2 className="text-2xl font-bold">Recipe Ingredients</h2>
      <div className="mt-4">
        <div className="flex flex-row gap-2">
          <ArrowSmallRightIcon className="h-5 w-5" />
          <p>Pizza</p>
        </div>
        <div className="flex flex-row gap-2">
          <ArrowSmallRightIcon className="h-5 w-5" />
          <p>Pizza</p>
        </div>
        <div className="flex flex-row gap-2">
          <ArrowSmallRightIcon className="h-5 w-5" />
          <p>Pizza</p>
        </div>
      </div>
    </div>
  );
}
