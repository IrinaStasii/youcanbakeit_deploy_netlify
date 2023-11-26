import React from "react";
import { useParams } from "react-router-dom";
import { all_recipes } from "../Recipes/all_recipes";
import "../Recipes/allrecipes.css";
import { useState } from "react";
import RecipePrint from "./RecipePrint";

const Recipe_Detail = ({ style }) => {
  const { name } = useParams();
  const decodedName = decodeURIComponent(name);
  const [comments, setComments] = useState(0);
  const [isPrinted, setIsPrinted] = useState(false);

  const handlePrintClick = () => {
    setIsPrinted((prevIsPrinted) => !prevIsPrinted); // Toggle the printing state
  };

  const recipe = all_recipes.find((recipe) => recipe.name === decodedName);

  if (!recipe) {
    return <div>Recipe not found.</div>;
  }

  return (
    <div style={style}>
    <div className="recipe-details-page">
      {/* entry */}
      <header className="entry-header">
        <h1 className="entry-title">{recipe.name}</h1>
        <p className="entry-meta">
          {recipe.time}{" "}
          <a href="/about" className="recipe-author">
            {recipe.author}
          </a>{" "}
          <span> - {comments} comments</span>
        </p>
      </header>
      <p>
        {/* main image */}
        <img
          className="cakeRecipeImage"
          src={import.meta.env.BASE_URL + recipe.image}
          alt="image is missing"
        />
      </p>

      {/* recipe description */}
      <p>{recipe.description}</p>

      {/* recipe image nr.2 */}
      {recipe.image2 ? (
        <img
          className="cakeRecipeImage"
          src={import.meta.env.BASE_URL + recipe.image2}
          alt="image is missing"
        />
      ) : null}

      {/* recipe part 1 */}
      {recipe.recipe_part1 ? (
        <div>
          <p className="recipe_parts">{recipe.recipe_part1}</p>
          <ul>
            {recipe.ingredients_part1.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <p>{recipe.instructions1}</p>
        </div>
      ) : null}

      {/* recipe part 2 */}
      {recipe.recipe_part2 ? (
        <div>
          <p className="recipe_parts">{recipe.recipe_part2}</p>
          <ul>
            {recipe.ingredients_part2.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <p>{recipe.instructions2}</p>
        </div>
      ) : null}

      {/* recipe part 3 */}
      {recipe.recipe_part3 ? (
        <div>
          <p className="recipe_parts">{recipe.recipe_part3}</p>
          <ul>
            {recipe.ingredients_part3.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <p>{recipe.instructions3}</p>
        </div>
      ) : null}

      {/* observations*/}
      <h6 className="onservations">{recipe.observations} </h6>

      {/* recipe insta link */}
      
      {recipe.instaLink ? (
        <a className="recipeInstaLink" href={recipe.instaLink}>
          Link
        </a>
      ) : null}

      {/* Tips&TRicks */}
      {recipe.tipsAndTricks ? (
        <div>
          <p className="recipe_parts">Tips & Tricks </p>
          <ul>
            {recipe.tipsAndTricks.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <button className="printButton" onClick={handlePrintClick}>Print Recipe</button>
      {isPrinted ? <RecipePrint recipe={recipe} /> : null}
    </div>
    </div>
  );
};

export default Recipe_Detail;
