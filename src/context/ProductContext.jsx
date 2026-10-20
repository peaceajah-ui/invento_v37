/* eslint-disable react-refresh/only-export-components */

import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    if (typeof window === "undefined") {
      return [];
    }

    const storedProducts = window.localStorage.getItem("products");

    try {
      return storedProducts ? JSON.parse(storedProducts) : [];
    } catch {
      return [];
    }
  });

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const ThemeContext = createContext();