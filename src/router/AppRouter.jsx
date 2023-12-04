import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cookies from '../pages/Cookies_Pages/Cookies';
import Cakes from '../pages/Cakes_pages/Cakes';
import AllRecipes from '../pages/All_Recipes_pages/AllRecipes';
import About from '../pages/About_pages/About';
import Kit from '../pages/Kit_pages/Kit';
import TermsOfUse from '../pages/Terms_of_use/TermsOfUse';
import PrivacyPolicy from '../pages/Privacy_policy/PrivacyPolicy';
import Contact from '../pages/Contact_pages/Contact';
import Home from '../pages/Home/Home';
import SearchResults from '../layout/SearchResults';
import Recipe_Detail from '../pages/Recipes/Recipe_Details';

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path="search-results/:query" element={<SearchResults />} />
      <Route path="search-results/:query/recipe/:name" element={<Recipe_Detail />} />
      {/* Other routes */}
      <Route path="allRecipes" element={<AllRecipes />} />
      <Route
        path='allRecipes/recipe/:name'
        element={<Recipe_Detail/>}
      />
      <Route path='cakes' element={<Cakes />} />
      <Route
        path='cakes/recipe/:name'
        element={<Recipe_Detail />}
      />
      <Route path='cookies' element={<Cookies />} />
      <Route
        path='cookies/recipe/:name'
        element={<Recipe_Detail />}
      />
      <Route path='kit' element={<Kit />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='termsofuse' element={<TermsOfUse />} />
      <Route path='privacyPolicy' element={<PrivacyPolicy />} />
    </Routes>
  );
};

export default AppRouter;
