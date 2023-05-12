import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();
export default function ProductsContextProvide({ children }) {
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    const product = async () => {
      const fetchProd = await fetch("https://dummyjson.com/products");
      const json = await fetchProd.json()
      setListProducts(() => json.products)
    };
    product();
  }, []);

  return (
      <ProductsContext.Provider value={{
        listProducts
        }}>
        {children}
      </ProductsContext.Provider>
  )
}
