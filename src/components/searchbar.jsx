import React from "react";

const SearchBar = () =>{
    return (
        <form className="flex justify-center" >
            <input type='search' id="ingredient-search" placeholder="Type your ingredients" className="bg-gray-300 rounded-l-md h-8 w-96 pl-2 
            "></input>
            <button type="submit" className="rounded-r-md bg-gray-300 h-8 pr-2">Add</button>
        </form>
    )
}


export default SearchBar;