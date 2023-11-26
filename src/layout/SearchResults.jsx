import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { all_recipes } from "../pages/Recipes/all_recipes";
import { Link } from "react-router-dom";
import "./layout.css";
import { Container, Row, Col } from "react-bootstrap";

const SearchResults = () => {
  const { query } = useParams();

  const searchQuery = query.toLowerCase();

  const matchingRecipes = all_recipes.filter((recipe) => {
    const hasMatchingKeyword =
      Array.isArray(recipe.keywords) &&
      recipe.keywords.some(
        (keyword) =>
          keyword && keyword.toLowerCase().includes(query.toLowerCase())
      );

    const hasMatchingName =
      recipe.name && recipe.name.toLowerCase().includes(query.toLowerCase());

    return hasMatchingKeyword || hasMatchingName;
  });

  return (
    <div className="search-resultsPageContent">
      <h2 className="search-resultsTitle">
        Search Results for: <span id="searchQuery">{searchQuery}</span>
      </h2>
      <div className="all-recipes-list">
        {matchingRecipes.length == 0 ? (
          <p id="search-noResults">
            No recipes found. Please try again with another keyword.
          </p>
        ) : (
          <Container>
            <Row id="search-resultsRow">
              {matchingRecipes.map((recipe) => (
                <Col lg={4} md={6} sm={6} key={recipe.id}>
                  <div key={recipe.id} className="recipe-card">
                    <h3>
                      <Link
                        className="recipe-link"
                        to={`/recipe/${encodeURIComponent(recipe.name)}`}
                      >
                        <img
                          src={import.meta.env.BASE_URL + recipe.image}
                          className="search-resultsRecipeImage"
                        />
                        <h5 className="recipe-name">{recipe.name}</h5>
                      </Link>
                    </h3>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
