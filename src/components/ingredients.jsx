import IngredientCard from "./ingredientCard";
// import React, { useState, useEffect, useRef } from "react";
// import { v4 as uuidv4 } from "uuid";
// import SearchBar from "./searchbar";

const Ingredients = ()=>{
 return(
    <div id="root" name='ingredients container'className=" pt-5 flex justify-center">
      <IngredientCard/>
    </div>
 )
}

export default Ingredients;