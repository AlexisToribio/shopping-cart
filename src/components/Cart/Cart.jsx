import { useId } from "react";
import { CartIcon, ClearCartIcon } from "../Icons/Icons.jsx";
import CartItem from "../CartItem/CartItem.jsx";
import { useCart } from "../../hooks/useCart.js";
import "./Cart.css";

export default function Cart() {
  const cartCheckboxId = useId();
  const { cart, addToCart, clearCart } = useCart();

  return (
    <>
      <label htmlFor={cartCheckboxId} className="cart-button">
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />
      <aside className="cart">
        <ul>
          {cart.map(product => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
            />
          ))}
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
