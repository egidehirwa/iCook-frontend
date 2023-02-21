import Image from "next/image";
import RecipeImage from "/src/public/recipe-single-image.jpg";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";

export default function RecipeSingle() {
  return (
    <main className="container mx-auto">
      <div>
        <h1>Recipe Title</h1>
        <div>
          {/* Recipe Image */}
          <Image src={RecipeImage} alt="image" width="600" height="600" />

          <div>
            {/* Recipe description */}
            <div>
              <h2>Recipe description</h2>
              <div>
                <ArrowSmallRightIcon className="h-6 w-6" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  hic neque possimus vero beatae dolores.
                </p>
              </div>
            </div>

            {/* Recipe Information */}
            <div></div>
          </div>
        </div>
      </div>
    </main>
  );
}
