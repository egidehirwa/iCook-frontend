"use client";

import React, { useState } from "react";
import SearchBar from "./searchbar";
import IngredientCard from "./ingredientCard";

const IngredientApp = () => {
  const [searchValue, setSearchValue] = useState("");
  const [ingredients, setIngredients] = useState([]);

  const handleDeleteIngredient = (index) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const handleSearchSubmit = (value) => {
    setSearchValue("");
    setIngredients([...ingredients, value]);
  };

  return (
    <div className="flex flex-col">
      <div>
        <SearchBar
          handleSearchSubmit={handleSearchSubmit}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>
      <div className="flex justify-center flex-wrap max-w-sm">
        {ingredients.map((ingredient, index) => (
          <IngredientCard
            key={index}
            searchValue={ingredient}
            onDelete={() => handleDeleteIngredient(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default IngredientApp;
