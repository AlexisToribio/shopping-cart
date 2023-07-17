import { createContext } from "react";
import { useCartReducer } from "../hooks/useCartReducer";

// 1. Crear contexto
export const CartContext = createContext();

// 2. Crear provider
export function CartProvider({ children }) {
  // SIN REDUCER

  // const [cart, setCart] = useState([]);

  // const addToCart = product => {
  //   // verificamos si el producto esta en el carrito
  //   const productInCartIndex = cart.findIndex(item => item.id === product.id);

  //   if (productInCartIndex >= 0) {
  //     // una forma sería usando structuredClone
  //     const newCart = structuredClone(cart);
  //     newCart[productInCartIndex].quantity += 1;
  //     return setCart(newCart);
  //   }

  //   // producto no está en el carrito
  //   setCart(prevState => [...prevState, { ...product, quantity: 1 }]);
  // };

  // const removeFromCart = product => {
  //   setCart(prevState => prevState.filter(item => item.id !== product.id));
  // };

  // const clearCart = () => {
  //   setCart([]);
  // };

  // CON REDUCER

  const { state, addToCart, removeFromCart, clearCart } = useCartReducer();

  return (
    <CartContext.Provider
      value={{ cart: state, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
