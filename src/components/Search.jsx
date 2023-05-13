import { useState, useEffect, useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

export default function Search() {
  const [searchProducts, setSearchProducts] = useState();
  const { listProducts } = useContext(ProductsContext);

  const fetchSearch = (e) => {
    if (e) {
      if (typeof e.preventDefault === "function") {
        e.preventDefault();
      }
      if (e.target) {
        const input = e.target.search.value;
        const search = () => {
          fetch(`https://dummyjson.com/products/search?q=${input}`)
            .then(res => res.json())
            .then(console.log)
            .catch(error=>error)
        }
        setSearchProducts(search);
      }
    }
  };
  //Buscador de productos
  useEffect(() => {
    fetchSearch();
  }, [searchProducts]);
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
      {searchProducts !== 0
        ? listProducts.filter((product) => searchProducts === product)
        : "No hay productos que coincidan con tu busqueda"}
    </div>
  );
}
