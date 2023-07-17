import { Products, Header, Footer } from "./components";
import { products as InitialProducts } from "./mocks/products.json";
import { IS_DEVELOPMENT } from "../config";
import { useFilters } from "./hooks/useFilters.js";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./context/cart.jsx";

function App() {
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(InitialProducts);

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  );
}

export default App;
