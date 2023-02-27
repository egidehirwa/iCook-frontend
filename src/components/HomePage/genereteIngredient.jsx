import React from "react";
import { ReactDOM } from "react";
import Ingredient from "./ingredientsList";

const ingredientCard = () => {
    return React.createElement(
        <Ingredient/>
    )
}

ReactDOM.render(React.createElement(ingredientCard), )