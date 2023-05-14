import { useContext } from "react"
import { ProductsContext } from "../context/ProductsContext"


export default function ListProducts() {
    const {listProducts} = useContext(ProductsContext)
    const handleClick= (e)=>{
    console.log("click", e.target.id)
    }
  return (
    <>
        <section className="container-all-products">
        {
          listProducts?.map((product) => (
          <article className="product" key={product.id}>
            <div className="container-image-product">
            <img src={product.images[0]} className="image-product"/>
            </div>
            <div className="title-product">
              <p>{product.title}</p>
              <p>{product.description.slice(0, 16)}</p>
            <div className="price">
              <p>${product.price}</p> 
              <button onClick={() => handleClick(product.id)} className="car-button"><img src="https://img.icons8.com/material/24/000000/add-shopping-cart--v1.png" id={product.id}/></button>  
              </div>
              
            </div>  
            
          </article>
        ) 
        )}
        </section>

    </>
  )
}
