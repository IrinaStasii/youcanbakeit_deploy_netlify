import React from "react";
import { Card, Button } from "react-bootstrap";
import "./kit.css";
import { useState } from "react";

const KitDetails = ({ product, onAddToBasket }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  return (
    <div
      className="cardDetails"
      // onMouseEnter={() => setPopupVisible(true)}
      onMouseLeave={() => setPopupVisible(false)}
    >
      <Card>
        {product.premium ? (
          <p className="image-overlay-paragraph">Premium</p>
        ) : null}

        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          {product.christmas ? (
            <Card.Text id="christmasKit">
              Perfect as a Christmas gift.
            </Card.Text>
          ) : null}
          <Card.Text>Price: ${product.price}</Card.Text>
          {product.available ? (
            <Button
              className="btn-sm btn-outline-secondary"
              onClick={() => onAddToBasket(product)}
            >
              Add to Basket
            </Button>
          ) : (
            <Button className="btn-sm btn-outline-secondary disabled">
              Not available
            </Button>
          )}
          <Button
            className="btn-sm btn-outline-secondary"
            onClick={() => setPopupVisible(true)}
          >
            Show more details
          </Button>
        </Card.Body>
      </Card>
      <div className={`popup-container ${isPopupVisible ? "show" : ""}`}>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p id="boxContents">You will find in this kit: {product.boxContents}</p>
        <h6>Observations: {product.observations}</h6>
        <Button
          className="btn-sm btn-outline-secondary"
          onClick={() => setPopupVisible(false)}
        >
          Hide details
        </Button>
      </div>
    </div>
  );
};

export default KitDetails;
