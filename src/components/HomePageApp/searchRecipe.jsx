"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const SearchRecipe = ({ handleRecipeSearch, ingredients, onSearch }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    console.log("recipes:", recipes);
  }, [recipes]);

  const [recipeCount, setRecipeCount] = useState(0);

  const handleRecipeCountChange = (event) => {
    setRecipeCount(event.target.value);
  };

  const handleSearch = () => {
    handleRecipeSearch(recipeCount);
    const ingredientArray = [];

    if (!Array.isArray(ingredients)) return;
    ingredients.forEach((ingredient) => {
      const { name } = ingredient;
      const ingredientObj = { name };
      ingredientArray.push(ingredientObj);
    });
    const searchParams = new URLSearchParams({
      i: JSON.stringify(ingredientArray),
      q: recipeCount,
    });

    // router.push("/homepage");

    onSearch(searchParams.toString());
  };
  return (
    <div className="flex justify-center flex-col items-center my-12 md:my-0 border h-28 w-64 rounded-xl bg-white ml-12">
      <div className="flex justify-around flex-row pb-4">
        <h3 className="ml-6">How many recipes?</h3>
        <input
          className="w-1/3"
          type="number"
          placeholder="Enter a number"
          onChange={handleRecipeCountChange}
          value={recipeCount}
        />
      </div>

      <button
        className="bg-red text-white shadow-md px-8 min-h-[40px] rounded-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        onClick={handleSearch}
      >
        Search for recipes
      </button>
    </div>
  );
};

export default SearchRecipe;
