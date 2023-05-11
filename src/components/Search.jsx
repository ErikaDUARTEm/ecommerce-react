import { useState } from "react"

export default function Search() {
  const [searchProducts, setSearchProducts] = useState();
 
  const search = (e)=>{
    e.preventDefault()
    const input = e.target.search.value
    const products = `https://dummyjson.com/products/search?q=${input}`

   const fetchSearch = () =>{
    fetch(products)
    .then(res => res.json())
    .then(console.log);
            
   } 
   setSearchProducts(fetchSearch)
  }
  console.log(searchProducts)
  return (
    <div className="container-search">
      <form onSubmit={search}>
         <label htmlFor="search" className="container-search">
          <input id="search" name="search" type="search" className="search"/>
          <button  className="button-search"><img src="https://img.icons8.com/ios-glyphs/30/null/search--v1.png"/></button>
       </label>
      </form>
      
    </div>
  )
}