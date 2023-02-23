import React from "react";
import Image from "next/image";
import logo from "/src/public/icook-logo.png"



const IngredientCard = ()=>{
 return(
    <div name= 'ingredientCard' className="flex flex-col h-32 w-32 bg-white border rounded-xl ml-5 items-center">
        <button className="text-grey ml-24 ">x</button>
       <Image src={logo} alt="random pic" className="h-24 w-24"/>
       <h3 className="p-1 bg-yellow border rounded-3xl pl-8 pr-8">name</h3>
    </div>
    
 )
}

export default IngredientCard;