import React from "react";

const SearchRecipe = () => {
    return(
        <div className="flex justify-center flex-col items-center border h-28 w-64 rounded-3xl bg-white ml-5">
            <div className="flex flex-col pb-2">
                <h3>How Many Recepies do you want ?</h3>
                <input type="number" placeholder="Enter a number"/>
            </div>
            <hr/>
            <div>
                <button className="border-2 border-red rounded-2xl pl-2 pr-2 bg-red  text-white transition-colors transform hover:bg-white hover:text-red hover:border-2 hover:border-red">Search for recipes</button>
            </div>
            
        </div>
    )
}

export default SearchRecipe