import React from "react";
import "./cakes.css";
import { Routes, Route } from "react-router-dom";
import Recipe_List from "../Recipes/Recipe_List";
import Recipe_Detail from "../Recipes/Recipe_Details";
import {all_recipes} from "../Recipes/all_recipes";

const Cakes = () => {
    console.log(all_recipes)
  return (
    <div className="recipesPage">
      <Routes>
        <Route path="/" element={<Recipe_List recipes={all_recipes} category="cakes" />} />
        <Route path="/recipe/:name" element={<Recipe_Detail />} />
      </Routes>
    </div>
  );
};

export default Cakes;
