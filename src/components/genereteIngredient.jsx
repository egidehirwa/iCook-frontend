import React from "react";
import { ReactDOM } from "react";
import Ingredient from "./ingredients";

const ingredientCard = () => {
    return React.createElement(
        <Ingredient/>
    )
}

ReactDOM.render(React.createElement(ingredientCard), )