import React from "react";
import Image from "next/image";
import logo from "/src/public/icook-logo.png"
const Ingredient = ()=>{
 return(
    <div name='ingredients container'className=" pt-5 flex justify-center">
       <div name= 'ingredientCard' className="flex flex-col h-28 w-28 bg-white border rounded-xl ml-5 items-center">
       <Image src={logo} alt="random pic" className="h-24 w-24"/>
       <h3 className="p-1 bg-yellow border rounded-3xl pl-8 pr-8">name</h3>
       </div>
    </div>
 )
}

export default Ingredient;