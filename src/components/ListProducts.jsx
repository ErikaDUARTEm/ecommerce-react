import { useEffect, useState } from "react"

export default function ListProducts() {
    const [ listProducts, setListProducts] = useState([])
    useEffect(()=>{
      const product = async ()=>{
       const fetchProd =  await fetch('https://dummyjson.com/products')
       const json = await fetchProd.json()
       setListProducts(()=> json.products)
      }
      product()
    }, [])

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
              <h3>{product.title}</h3>
              <h3>${product.price}</h3>
            </div>  
          </article>
        ) 
        )}
        </section>

    </>
  )
}
