import { useContext, useEffect, useState } from "react";
import FilterCategory from "./FilterCategory";
import PropTypes from 'prop-types';
import ListProducts from "./ListProducts";
import Loading from './Loading';
import { ProductsContext } from "../context/ProductsContext";

export default function AllCategory({ onSelectAllCategories }) {
  const [categories, setCategories] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("allCategories");
  const { isLoading, setIsLoading } = useContext(ProductsContext);


  const fetchCategories = async (e) => {
        setIsLoading(true)
    if(e){
        if (typeof e.preventDefault === "function") {
      e.preventDefault();
    }
    if (e.target) {
        const category = e.target.value;
        setSelectedCategory(category);
        
        try {
          const fetchCategories = await fetch(
            `https://dummyjson.com/products/category/${category}`
          );
          const resp = await fetchCategories.json();
          setCategories(resp);
          setIsLoading(false)
          
          if (category === "allCategories" && onSelectAllCategories) {
                onSelectAllCategories(true);
              } else {
                onSelectAllCategories(false);
              }
        } catch {
          (error) => console.log(error);
        }
      }
   }  

}

  useEffect(() => {
     
    fetchCategories();
    
  }, []);

  const handleClick = (e) => {
    console.log("click", e.target.id);
  };

  return (
    <>
      <select
        name="categories"
        onChange={fetchCategories}
        className="select"
      >
        <option value="allCategories" autoFocus>
          AllCategories
        </option>
        <option value="smartphones">Smartphones</option>
        <option value="laptops">Laptops</option>
        <option value="fragrances">Fragrances</option>
        <option value="skincare">Skincare</option>
        <option value="groceries">Groceries</option>
        <option value="home-decoration">Home-decoration</option>
        <option value="furniture">Furniture</option>
        <option value="tops">Tops</option>
        <option value="womens-dresses">Womens-dresses</option>
        <option value="womens-shoes">Womens-shoes</option>
        <option value="mens-shirts">Mens-shirts</option>
        <option value="mens-shoes">Mens-shoes</option>
        <option value="mens-watches">Mens-watches</option>
        <option value="womens-watches">Womens-watches</option>
        <option value="womens-bags">Womens-bags</option>
        <option value="womens-jewellery">Womens-jewellery</option>
        <option value="sunglasses">Sunglasses</option>
        <option value="automotive">Automotive</option>
        <option value="motorcycle">Motorcycle</option>
        <option value="lighting">Lighting</option>
      </select>
      {isLoading ? (
       <Loading/>
      ) : selectedCategory !== "allCategories" ? (
        <FilterCategory categories={categories} handleClick={handleClick} />
      ) : (
        <ListProducts />
      )}
      
    </>
  );
}
AllCategory.propTypes = {
        onSelectAllCategories: PropTypes.func.isRequired,
};
