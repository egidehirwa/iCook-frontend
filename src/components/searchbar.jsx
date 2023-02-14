import React from "react";
import { PlusIcon } from '@heroicons/react/24/outline'



const SearchBar = () =>{
    return (
        <form className="flex justify-center" >
            <input type='text' id="ingredient-search" placeholder="Type your ingredients ..." className="bg-gray-300 rounded-l-md h-8 w-96 pl-2 outline-0 placeholder-gray-400 placeholder
            "></input>
            <button type="submit" className="rounded-r-md bg-gray-300 h-8 pr-2">< PlusIcon className="text-gray-700 h-6 w-6"/>
            </button>
            
        
        </form>
    )
}


export default SearchBar;