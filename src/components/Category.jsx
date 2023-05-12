import { useContext } from "react"
import { ProductsContext } from "../context/ProductsContext"

export default function Category() {
  const {listProducts} = useContext(ProductsContext)
  const handleClick = (e) =>{
console.log(e.target.value)
  }
  return (
    <div className="category-header">
        <nav className="nav-category-header">
            <ul className="list-category-header">
                <li value='smartphones'><a href="" onClick={handleClick}>Smartphones</a></li>
                <li><a>Fragrances</a></li>
                <li><a>Laptos</a></li>
                <li><a>Skincare</a></li>
                <li><a>Groceries</a></li>
            </ul>
        </nav>
    </div>
  )
}
