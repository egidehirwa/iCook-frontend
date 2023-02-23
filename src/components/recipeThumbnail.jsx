import Image from "next/image";
import RecipeImage from "/src/public/recipe-single-image.jpg";

export default function RecipeThumbnail() {
  return (
    <Image
      src={RecipeImage}
      alt="image"
      width="200"
      height="200"
      className="w-2/5 rounded-md"
    />
  );
}
