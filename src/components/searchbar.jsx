"use client";

import React from "react";
import { PlusIcon } from '@heroicons/react/24/outline';
// import { v4 as uuidv4 } from "uuid";
import { v4 as uuidv4 } from "uuid";


const SearchBar = (props) => {
   
    return (
        <form  name="" className="flex" onSubmit={props.onSubmit}>
            <input type='text'
            id="ingredient-search"
            placeholder="Type your ingredients ..." 
            className="bg-gray-300 rounded-l-md w-96 pl-2 outline-0 placeholder-gray-400 placeholder h-12"
            value={props.value}
            onChange={props.onChange}
            ref={props.reference}
            required
             />
            <button type="submit" className="rounded-r-md bg-gray-300 h-12 pr-2">< PlusIcon className="text-gray-700 h-6 w-6"/>
            </button>
            
        </form>
    )
}

export default SearchBar;

