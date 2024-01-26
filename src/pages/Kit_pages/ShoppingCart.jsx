import { Offcanvas, OffcanvasBody, Stack, Button } from "react-bootstrap";
import OffcanvasHeader from "react-bootstrap/OffcanvasHeader";
import OffcanvasTitle from "react-bootstrap/OffcanvasTitle";
import { useShoppingCart } from "./ShoppingCartContext";
import { CartItem } from "./CartItem";
import { useAlert } from "../../alert/useAlert";

export function ShoppingCart({ isOpen }) {
  const { closeCart, cartItems } = useShoppingCart();
  const { removeFromCart } = useShoppingCart();
  const showAlert = useAlert();

  const cartCheckout = () => {
    cartItems.length > 0
      ? showAlert(
          "Checkout feature is currently undergoing improvements. Please try again later."
        )
      : showAlert("No items in the cart");
  };

  console.log(cartItems);
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <OffcanvasHeader closeButton>
        <OffcanvasTitle>Cart</OffcanvasTitle>
      </OffcanvasHeader>
      <OffcanvasBody>
        <Stack gap={3}>
          {cartItems.length > 0 ? (
            cartItems.map((item) => <CartItem key={item.id} {...item} />)
          ) : (
            <div>Your cart is emthy!</div>
          )}
          <Button className="btn-outline-secondary" size="sm" onClick={() => cartCheckout()}>
            {" "}
            Checkout
          </Button>
        </Stack>
      </OffcanvasBody>
    </Offcanvas>
  );
}
