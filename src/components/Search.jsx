import { useState, useEffect, useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
export default function Search() {

  const [searchProducts, setSearchProducts] = useState([]);
  const {listProducts} = useContext(ProductsContext)
   
   const fetchSearch = (e)=>{
    e.preventDefault()
    const input = e.target.search.value
    console.log(input)
    setSearchProducts(input)
      
}
   //Buscador de productos
  useEffect(()=>{
 
},[searchProducts]);

  return (
    <div className="container-search">
      <form onSubmit={()=>fetchSearch}>
         <label htmlFor="search" className="container-search">
          <input id="search"  type="search" className="search"/>
          <button type="submit" name="search" className="button-search"><img src="https://img.icons8.com/ios-glyphs/30/null/search--v1.png"/></button>
       </label>
      </form>
      {searchProducts !== 0 ? (listProducts.filter((product)=>searchProducts === product)) :'No hay productos que coincidan con tu busqueda'}
    </div>
  )
}