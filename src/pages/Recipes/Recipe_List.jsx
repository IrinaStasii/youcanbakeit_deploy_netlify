import React from "react";
import Recipe_Card from "../Recipes/Recipe_Card";
import { Container, Row, Col } from "react-bootstrap";
import "./allrecipes.css";

const Recipe_List = ({ recipes, category }) => {
  const filteredRecipes = category
    ? recipes.filter((recipe) => recipe.category === category)
    : // ? recipes.filter((recipe) => recipe.category === category)
      recipes;

  return (
    <div className="all-recipes-list">
      <Container>
        <Row id="search-resultsRow">
          {filteredRecipes.map((recipe) => (
            <Col lg={4} md={6} sm={6} key={recipe.id}>
              <Recipe_Card key={recipe.id} {...recipe} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Recipe_List;


  /* <Container>
<Row>
  {products.map((product) => (
    <Col lg={6} md={8} sm={12} key={product.id}>
      <KitDetails
        key={product.id}
        product={product}
        onAddToBasket={addToBasket}
      />
    </Col>
  ))}
</Row>
<Basket basket={basket} onDeleteFromBasket={delefeFromBasket} />
</Container> */

