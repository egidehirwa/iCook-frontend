import Image from "next/image";
import RecipeImage from "/src/public/recipe-single-image.jpg";

export default function RecipeThumbnail() {
  return (
    <Image
      src={RecipeImage}
      alt="image"
      width="full"
      height="full"
      className="rounded-md"
    />
  );
}
