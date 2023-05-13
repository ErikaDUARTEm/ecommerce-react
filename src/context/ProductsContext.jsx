import { createContext, useEffect, useState } from "react";


export const ProductsContext = createContext();
export default function ProductsContextProvide({ children }) {
  const [listProducts, setListProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

//todos los productos
  useEffect(() => {
    const product = async () => {
      setIsLoading(true)
        try{
            const fetchProd = await fetch("https://dummyjson.com/products");
            const json = await fetchProd.json()
            setListProducts(() => json.products)
            setIsLoading(false)
        }catch{(error)=>error}
    }
   
    product();
  }, []);


  return (
      <ProductsContext.Provider value={{
        listProducts,
        isLoading,
        setIsLoading
        }}>
        {children}
      </ProductsContext.Provider>
  )
}
