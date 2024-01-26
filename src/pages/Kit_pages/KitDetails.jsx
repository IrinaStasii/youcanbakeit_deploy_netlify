import React from "react";
import { Card, Button } from "react-bootstrap";
import "./kit.css";
import { useState } from "react";
import { useShoppingCart } from "./ShoppingCartContext";

//each kit details on the page
const KitDetails = ({ product }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(product.id);

  return (
    <div className="cardDetails" onMouseLeave={() => setPopupVisible(false)}>
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

          <div className="mt-auto">
            {/* {product.available ? (
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
          )} */}

            {product.available ? (
              quantity === 0 ? (
                <Button
                  className="w-100 btn-outline-secondary"
                  onClick={() =>
                    increaseCartQuantity(
                      product.id,
                      product.name,
                      product.image
                    )
                  }
                >
                  {" "}
                  + Add To Cart{" "}
                </Button>
              ) : (
                <div className="d-flex align-items-center flex-column ">
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{ gap: ".5rem" }}
                  >
                    <Button className="btn-outline-secondary" onClick={() => decreaseCartQuantity(product.id)}>
                      -
                    </Button>
                    <div className="">
                      <span className="fs-3">{quantity} </span>
                      in cart
                    </div>
                    <Button className="btn-outline-secondary" onClick={() => increaseCartQuantity(product.id)}>
                      {" "}
                      +{" "}
                    </Button>
                  </div>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => removeFromCart(product.id)}
                  >
                    {" "}
                    Remove
                  </Button>
                </div>
              )
            ) : (
              <Button className="w-100 btn-outline-secondary disabled"> Out of stock </Button>
            )}

            <div className="d-flex align-items-center flex-column">
              <Button className="w-100 btn-outline-secondary" onClick={() => setPopupVisible(true)}>
                Show more details
              </Button>
            </div>
          </div>
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
