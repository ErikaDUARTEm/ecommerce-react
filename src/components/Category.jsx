import { Link } from "react-router-dom"
import { FRAGRANCES, SMARTPHONES } from "../routes/routesPath"
import { ProductsContext } from "../context/ProductsContext"
import { useContext } from "react"



export default function Category() {
  const {listProducts} = useContext(ProductsContext)
  
  const handleClick = (e) =>{
    e.preventDefault()
    const id = e.target.id;
    console.log(id)
    }
  return (
    <div className="category-header">
        <nav className="nav-category-header">
            <ul className="list-category-header" key={listProducts.id}>
                <li><Link to={SMARTPHONES} onClick={handleClick} id="smartphones">Smartphones</Link></li>
                <li><Link to={FRAGRANCES} onClick={handleClick} id="fragrances">Fragrances</Link></li>
                <li><a>Laptos</a></li>
                <li><a>Skincare</a></li>
                <li><a>Groceries</a></li>
            </ul>
        </nav>
    </div>
  )
}
