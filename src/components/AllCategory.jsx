import { useEffect, useState } from "react";




export default function AllCategory() {
  const [categories, setCategories] = useState([]);


  const fetchCategories = async (e) => {
    e.preventDefault()
    const category= e.target.value

        try{
                const fetchCategories = await fetch(`https://dummyjson.com/products/category/${category}`)
                const resp = await fetchCategories.json()
                setCategories(resp)
            }catch{(error)=>console.log(error)}    
    }

  useEffect(() => {
    fetchCategories()
  }, [categories]);
console.log(categories)
  return (
    <>
      <select name="categories" onChange={fetchCategories}>
        <option value="allCategories" autoFocus>AllCategories</option>
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
      <section className="section-filter-categories">
      {categories && categories.products?.map((product)=> (
        <article className="product" key={product.id}>
            <div className="container-image-product">
            <img src={product.images[0]} className="image-product"/>
            </div>
            <div className="title-product">
              <h4>{product.title}</h4>
              <h4>${product.price}</h4>
            </div>  
          </article>
))}
      </section>
      
     
    </>
  )
}
