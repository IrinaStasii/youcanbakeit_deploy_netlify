import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Cookies from "./pages/Cookies_Pages/Cookies";
import Cakes from "./pages/Cakes_pages/Cakes";
import AllRecipes from "./pages/All_Recipes_pages/AllRecipes";
import About from "./pages/About_pages/About";
import Kit from "./pages/Kit_pages/Kit";
import TermsOfUse from "./layout/TermsOfUse";
import PrivacyPolicy from "./layout/PrivacyPolicy";
import Contact from "./pages/Contact_pages/Contact";
import Home from "./pages/Home/Home";
import { useState } from "react";
import SearchResults from "./layout/SearchResults";
import Recipe_Detail from "./pages/Recipes/Recipe_Details";

function App() {
  // const [loggedIn, setLoggedIn] = useState(false);
  // const [email, setEmail] = useState("");

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<Home />} />
        <Route path="/search-results/:query" element={<SearchResults />} />
        <Route
          path="/recipe/:name"
          element={<Recipe_Detail style={{ width: "70%" }} />}
        />
        <Route path="kit" element={<Kit />} />
        <Route path="allRecipes/*" element={<AllRecipes />} />
        <Route path="/cakes/*" element={<Cakes />} />
        <Route path="cookies/*" element={<Cookies />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="termsofuse" element={<TermsOfUse />} />
        <Route path="privacyPolicy" element={<PrivacyPolicy />} />
      </Route>
    </Routes>
  );
}

export default App;
