import React, { useEffect, useRef } from "react";
import "./allrecipes.css";

const RecipePrint = ({ recipe }) => {
  const newWindowRef = useRef(null);

  useEffect(() => {
   
    if (!newWindowRef.current || newWindowRef.current.closed) {
      const newWindow = window.open("", "_blank");
      newWindowRef.current = newWindow;

      newWindow.document.write(`<html><head><title>${recipe.name} recipe print</title>`);

      newWindow.document.write(
        "<style>" +
        ".printPageContent p {text-align: justify}" +
        ".recipeImg { width: 200px; float: right; margin-left: 20px; }" +
        ".recipe_parts { font-weight: bold; font-size:18px; }" +
        ".printPageContent {width: 700px; margin:15px; padding: 20px; border: 2px solid gray}" +
        "</style></head><body>"
      );
      
      newWindow.document.write("<div class ='printPageContent'>")
      newWindow.document.write(`<p>${recipe.name}${recipe.author}</p>`);

      newWindow.document.write(
        `<img class="recipeImg" src="${
          import.meta.env.BASE_URL + recipe.image
        }" alt="image is missing" />`
      );
    
      if (recipe.recipe_part1) {
        newWindow.document.write(
          `<p class="recipe_parts">${recipe.recipe_part1}</p>`
        );
        newWindow.document.write("<ul>");
        recipe.ingredients_part1.forEach((ingredient, index) => {
          newWindow.document.write(`<li key=${index}>${ingredient}</li>`);
        });
        newWindow.document.write("</ul>");
        newWindow.document.write(`<p>${recipe.instructions1}</p>`);
      }
      if (recipe.recipe_part2) {
        newWindow.document.write(
          `<p class="recipe_parts">${recipe.recipe_part2}</p>`
        );
        newWindow.document.write("<ul>");
        recipe.ingredients_part2.forEach((ingredient, index) => {
          newWindow.document.write(`<li key=${index}>${ingredient}</li>`);
        });
        newWindow.document.write("</ul>");
        newWindow.document.write(`<p>${recipe.instructions2}</p>`);
      }
      if (recipe.recipe_part3) {
        newWindow.document.write(
          `<p class="recipe_parts">${recipe.recipe_part3}</p>`
        );
        newWindow.document.write("<ul>");
        recipe.ingredients_part3.forEach((ingredient, index) => {
          newWindow.document.write(`<li key=${index}>${ingredient}</li>`);
        });
        newWindow.document.write("</ul>");
        newWindow.document.write(`<p>${recipe.instructions3}</p>`);
      }

      if (recipe.observations) {
        newWindow.document.write(
          `<p class="recipe_parts">${recipe.observations}</p>`
        );
      }

      if (recipe.tipsAndTricks) {
        newWindow.document.write(
          `<p class="recipe_parts">Tips & Tricks </p>`
        );
        newWindow.document.write("<ul>");
        recipe.tipsAndTricks.forEach((tip,index) => {
          newWindow.document.write(`<li key=${index}>${tip}</li>`);
        });
        newWindow.document.write("</ul>");
      }

      newWindow.document.write("</div>");

      newWindow.onload = () => {
        newWindow.print();
        newWindow.document.close();

        // newWindow.addEventListener("afterprint", () => {
        //   console.log("After Print Event");
        //   newWindow.document.close();
        // });
      };

      setTimeout(() => {
        newWindow.document.close();
      }, 1000);
    }
  }, [recipe]);

  return null;
};

export default RecipePrint;
