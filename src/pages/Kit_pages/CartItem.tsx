import { Button, Stack } from 'react-bootstrap';
import React from 'react';
import { useShoppingCart } from './ShoppingCartContext';

type CartItemProps = {
  id: number
  quantity: number
  name: string
  image: string
}

export function CartItem({ id, quantity, name, image }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();

    return (
      <Stack key={id} direction="horizontal" gap={2} className="d-flex align-items-center">
        <img
          src={image}
          style={{ width: "125px", height: "75px", objectFit: "cover" }}
          alt={name}
        />
        <div className="me-auto">
          <div>
            {name}{" "}
            {quantity > 1 && (
              <span className="text-muted" style={{ fontSize: ".65rem" }}>
                x{quantity}
              </span>
            )}
          </div>
        </div>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => removeFromCart(id)}
        >
          &times;
        </Button>
      </Stack>
    );
}
