import { useContext } from "react"
import { ProductsContext } from "../context/ProductsContext"


export default function ListProducts() {
    const {listProducts} = useContext(ProductsContext)

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
              <h4>{product.title}</h4>
              <h4>${product.price}</h4>
            </div>  
          </article>
        ) 
        )}
        </section>

    </>
  )
}
