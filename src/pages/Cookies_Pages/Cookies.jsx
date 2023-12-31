import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Recipe_List from '../Recipes/Recipe_List';
import Recipe_Detail from '../Recipes/Recipe_Details';
import { all_recipes } from '../Recipes/all_recipes';

const Cookies = () => {
  return (
    <div className='recipesPage'>
      <Recipe_List recipes={all_recipes} category='cookies' />
    </div>
  );
};

export default Cookies;
