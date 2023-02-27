// import IngredientCard from "./ingredientCard";
// // import React, { useState, useEffect, useRef } from "react";
// // import { v4 as uuidv4 } from "uuid";
// // import SearchBar from "./searchbar";

// const IngredientsList = (props)=>{
//  return(
//     <div id="root" name='ingredients container'className=" pt-5 flex justify-center">
//       <ul name="ingredientList">{props.children}</ul>
//     </div>
//  )
// }

// export default IngredientsList;
import React from "react";

const TodoList = (props) => {
  return (
    <div className="TodoList-container">
      <ul className="TodoList">{props.children}</ul>
    </div>
  );
};

export default TodoList;
