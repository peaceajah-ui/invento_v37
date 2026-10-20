import { useContext, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";

const Header = () => {
  const { products = [] } = useContext(ProductContext);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("products", JSON.stringify(products));
    }
  }, [products]);

  return (
    <header className="site-header">
      <h1 className="text-3xl">Invento</h1>
      <p className="text-2xl">
        Number of Products in Inventory: <span className="product-count">{products.length}</span>
      </p>
    </header>
  );
};

export default Header;