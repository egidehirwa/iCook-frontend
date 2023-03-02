'use client'

import React, {useEffect, useState} from "react";
import { useRouter } from 'next/router'


const SearchRecipe = ({ ingredients, onSearch }) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        console.log("recipes:", recipes);
      }, [recipes]);


    
    const [recipeCount, setRecipeCount] = useState(0);
  
    const handleRecipeCountChange = (event) => {
      setRecipeCount(event.target.value);
    };

    

    const handleSearch = () => {
        const ingredientArray =[];

        if (!Array.isArray(ingredients)) return; 
    ingredients.forEach((ingredient)=>{
        const {name} = ingredient;
        const ingredientObj = {name};
        ingredientArray.push(ingredientObj)
    } );
        const searchParams = new URLSearchParams({
            i:JSON.stringify(ingredientArray),
            q:recipeCount,
        });

        

        router.push('/homepage')

        onSearch(searchParams.toString());
        
    };
    return(
        <div className="flex justify-center flex-col items-center border h-28 w-64 rounded-3xl bg-white ml-5">
            <div className="flex flex-col pb-2">
                <h3>How Many Recepies do you want ?</h3>
                <input 
                type="number" placeholder="Enter a number"
                onChange={handleRecipeCountChange}
                value={recipeCount}
                />
                </div>
                
                <button className="border-2 border-red rounded-2xl pl-2 pr-2 bg-red  text-white transition-colors transform hover:bg-white hover:text-red hover:border-2 hover:border-red"
                onClick={handleSearch}
                
                >Search for recipes</button>
            
            
        </div>
    )
}

export default SearchRecipe