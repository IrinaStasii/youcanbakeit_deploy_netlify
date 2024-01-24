import { Offcanvas, OffcanvasBody, Stack, Button } from "react-bootstrap";
import OffcanvasHeader from "react-bootstrap/OffcanvasHeader";
import OffcanvasTitle from "react-bootstrap/OffcanvasTitle";
import { useShoppingCart } from "./ShoppingCartContext";
import {CartItem} from "./CartItem";


export function ShoppingCart({ isOpen }) {
  const { closeCart, cartItems } = useShoppingCart();
  const { removeFromCart } = useShoppingCart()

  console.log(cartItems);
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <OffcanvasHeader closeButton>
        <OffcanvasTitle>Cart</OffcanvasTitle>
      </OffcanvasHeader>
      <OffcanvasBody>
        <Stack gap={3}>
        
          {
            
          cartItems.length > 0 ? (
            cartItems.map((item) => <CartItem key={item.id} {...item} />)
          ) : (
            <div>Your cart is emthy!</div>
          )}
           <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
        </Stack>
      </OffcanvasBody>
    </Offcanvas>
  );
}

