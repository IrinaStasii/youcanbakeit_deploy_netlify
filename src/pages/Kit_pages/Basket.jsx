import React from 'react';

const Basket = ({ basket, onDeleteFromBasket }) => {
  const calculateTotal = () => {
    const total = basket.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return total;
  };

  return (
    <div className="basket">
      <h2>Basket Contents</h2>
      <ul>
        {basket.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt={item.name} width="50" height="50" />
            {item.name} - ${item.price}
            <span>Quantity: {item.quantity}</span>
            <button onClick={() => onDeleteFromBasket(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${calculateTotal()}</p>
      <button>Checkout</button>
    </div>
  );
};

export default Basket;
