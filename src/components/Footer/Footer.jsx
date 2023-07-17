// import { useCart } from "../../hooks/useCart.js";
// import { useFilters } from "../../hooks/useFilters.js";
import "./Footer.css";

export default function Footer() {
  // const { filters } = useFilters();
  // const { cart } = useCart();
  return (
    <footer className="footer">
      {/* {JSON.stringify(filters, null, 2)} */}
      {/* {JSON.stringify(cart, null, 2)} */}
      <h4>
        Prueba técnica de React ⚛️ - <span>@alexistoribio</span>
      </h4>
      <h5>Shopping Cart on useContext & useReducer</h5>
    </footer>
  );
}
