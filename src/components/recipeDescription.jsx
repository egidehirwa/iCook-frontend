import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";

export default function RecipeDescription() {
  return (
    <div className="px-8 mb-8">
      <h2 className="text-2xl font-bold">Recipe description</h2>
      <div className="flex flex-row">
        <ArrowSmallRightIcon className="h-6 w-6" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem hic neque
          possimus vero beatae dolores.
        </p>
      </div>
    </div>
  );
}
