"use client";

import React, { useState } from "react";
import SearchBar from "./searchbar";
import IngredientCard from "./ingredientCard";
import SearchRecipe from "./searchRecipe";

const IngredientApp = () => {

    const [searchValue, setSearchValue] = useState('');
    const [ingredients, setIngredients] = useState([]);

    const handleDeleteIngredient = (id) => {
      setIngredients(ingredients.filter((ingredient) => ingredient.id !== id));
    }

    const handleSearchSubmit = (value) => {
        setSearchValue("");
        setIngredients([...ingredients, { id: Date.now(), name: value }]);
    };
   
    const handleRecipeSearch = (numRecipes) => {
      const ingredientJSON = JSON.stringify(ingredients);
      console.log('Ingredients JSON', ingredientJSON) 
    }

    return(
        <div className="flex">
          <div className="flex flex-col">
           <div>
           <SearchBar 
          handleSearchSubmit={handleSearchSubmit}  
          searchValue={searchValue}
          setSearchValue={setSearchValue}/>
           </div>
           <div className="flex justify-center">
           {ingredients.map((ingredient, index) => (
          <IngredientCard 
          key={ingredient.id} 
          id={ingredient.id} 
          searchValue={ingredient.name} onDelete={() => handleDeleteIngredient(ingredient.id)} />
        ))}
           </div>
        </div>
          <SearchRecipe handleRecipeSearch={handleRecipeSearch}/>
      </div>

    )
}



export default IngredientApp;
