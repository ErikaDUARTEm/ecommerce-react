import { Link } from "react-router-dom"
import { FRAGRANCES, SMARTPHONES, LAPTOS, SKINCARE, GROCERIES } from "../routes/routesPath"
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
                <li><Link to={SMARTPHONES} onClick={()=>handleClick} id="smartphones">Smartphones</Link></li>
                <li><Link to={FRAGRANCES} onClick={()=>handleClick} id="fragrances">Fragrances</Link></li>
                <li><Link to={LAPTOS} onClick={()=>handleClick} id="smartphones">Laptos</Link></li>
                <li><Link to={SKINCARE} onClick={()=>handleClick} id="fragrances">Skincare</Link></li>
                <li><Link to={GROCERIES} onClick={()=>handleClick} id="fragrances">Groceries</Link></li>   
            </ul>
        </nav>
    </div>
  )
}
