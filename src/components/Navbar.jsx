import { Link } from "react-router-dom";
import { HOME, LOGIN, SINGUP } from "../routes/routesPath";
import Category from "./Category";
import Search from "./Search";

export default function Navbar() {
  return (
    <>
      <header>
        <nav className="nav-Navbar">
            <div className="logo">
               <Link to={HOME}>
                <img width="64" height="64" src="https://img.icons8.com/wired/64/000000/shop.png" alt="shop"/>
                </Link>
                <h1>Store</h1>
            </div>
            <div className="container-nav-list">
            <ul className="nav-list">
                <li><Link to={SINGUP}>Sign up</Link></li>|
                <li><Link to={LOGIN}>Login</Link></li>
                <li className="car">
                  <button className="car-button"><img src="https://img.icons8.com/material/24/000000/add-shopping-cart--v1.png"/></button>  
                  <span>0</span>
                </li>
            </ul>
            </div>
            <div className="search-category">
            <Search/>
            <Category/>
          </div>
        </nav>

      </header>
       
    </>
  )
}
