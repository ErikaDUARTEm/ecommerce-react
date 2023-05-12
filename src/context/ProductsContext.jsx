import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();
export default function ProductsContextProvide({ children }) {
  const [listProducts, setListProducts] = useState([]);
  

//todos los productos
  useEffect(() => {
    const product = async () => {
        try{
            const fetchProd = await fetch("https://dummyjson.com/products");
            const json = await fetchProd.json()
            setListProducts(() => json.products)
        }catch{(error)=>error}
    }
    product();
  }, []);


  return (
      <ProductsContext.Provider value={{
        listProducts,
        
        }}>
        {children}
      </ProductsContext.Provider>
  )
}
