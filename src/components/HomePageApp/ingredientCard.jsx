'use client'


import React from "react";
import Image from "next/image";
import logo from "/src/public/icook-logo.png";



const IngredientCard = ({ searchValue, onDelete })=>{
   
   return(
       <div name= 'ingredientCard' >
          <button className="text-grey ml-24" onClick={onDelete}>x</button>
          <div>
          <h3 className="p-1 bg-yellow border rounded-3xl pl-8 pr-8">{searchValue}</h3>
          </div>
       </div>
   )
}
export default IngredientCard;