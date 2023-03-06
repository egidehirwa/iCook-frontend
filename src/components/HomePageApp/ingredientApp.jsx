"use client";

import React, { useState } from "react";
import SearchBar from "./searchbar";
import IngredientCard from "./ingredientCard";
import SearchRecipe from "./searchRecipe";
import Recipe from "src/components/recipe.jsx";

const IngredientApp = () => {
  const [searchValue, setSearchValue] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipes] = useState([]);

  const handleDeleteIngredient = (id) => {
    setIngredients(ingredients.filter((ingredient) => ingredient.id !== id));
  };

  const handleSearchSubmit = (value) => {
    setSearchValue("");
    setIngredients([...ingredients, { id: Date.now(), name: value }]);
  };

  const handleRecipeSearch = (numRecipes) => {
    const ingredientJSON = JSON.stringify(ingredients);
    console.log("Ingredients JSON", ingredientJSON);
    fetch("https://icook-backend.herokuapp.com/getRecipesByIngredients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ingredients: ingredients.map((element) => element.name),
        number_of_recipe: numRecipes,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRecipes(data.result);
      });
  };

  return (
    <div flex flex-col>
      <div className="flex flex-col my-12 md:flex-row">
        <div className="flex flex-col">
          <div>
            <SearchBar
              handleSearchSubmit={handleSearchSubmit}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </div>
          <div className="flex justify-center">
           {ingredients.map((ingredient) => (
           <IngredientCard
            key={ingredient.id}
            id={ingredient.id}
            searchValue={ingredient.name}
            onDelete={() => handleDeleteIngredient(ingredient.id)}
          />
          ))}
          </div>
        </div>
        <SearchRecipe handleRecipeSearch={handleRecipeSearch} />
      </div>
      <div className="flex flex-col">
        {recipes.map((recipe) => (
          <Recipe title={recipe.title} image={recipe.image} />
        ))}
      </div>
    </div>
  );
};

export default IngredientApp;
