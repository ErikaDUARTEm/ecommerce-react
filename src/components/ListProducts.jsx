import { useEffect, useState } from "react"

export default function ListProducts() {
    const [ listProducts, setListProducts] = useState([])
    useEffect(()=>{
      const product = async ()=>{
       const fetchProd =  await fetch('https://dummyjson.com/products')
       const json = await fetchProd.json()
       const data = await json
       setListProducts(()=> data.products)
      }
      product()
    }, [])

    console.log(listProducts)
  return (
    <>
        <section>
        {
          listProducts.map((product) => (
          <div key={product.id}>
             <img src={product.images[0]}></img>
              <h2>{product.title}</h2>
          </div>
        ) 
        )}
        </section>

    </>
  )
}
