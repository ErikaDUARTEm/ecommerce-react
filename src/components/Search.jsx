import { useState, useEffect, useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import SearchResults from "./SearchResults";


export default function Search() {
  const [searchProducts, setSearchProducts] = useState([]);
  const { listProducts } = useContext(ProductsContext);

  const fetchSearch = (e) => {
    if (e) {
      if (typeof e.preventDefault === "function") {
        e.preventDefault();
      }
      if (e.target) {
        const input = e.target.search.value;
        
        const filteredProducts = listProducts.filter((product) => {
          const searchTerm = input.toLowerCase();
          const title = product.title.toLowerCase();
          const description = product.description.toLowerCase();
          const brand = product.brand.toLowerCase();
          return (
            title.includes(searchTerm) ||
            description.includes(searchTerm) ||
            brand.includes(searchTerm)
          );
        });
        
        setSearchProducts(filteredProducts)
      }
    }
  };
console.log(searchProducts)
  //Buscador de productos
  useEffect(() => {
    fetchSearch();
  }, [])

  return (
    <div className="container-search">
      <form onSubmit={fetchSearch}>
        <label htmlFor="search" className="container-search">
          <input id="search" type="search" className="search" name="search"/>
          <button type="submit" className="button-search">
            <img src="https://img.icons8.com/ios-glyphs/30/null/search--v1.png" />
          </button>
        </label>
      </form>
        {searchProducts !== [] ? (<SearchResults searchProducts={searchProducts}/>) : (<p>Search not found</p>)}
    </div>
  );
}
