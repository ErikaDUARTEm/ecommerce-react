import Category from "./Category";
import Search from "./Search";

export default function Navbar() {
  return (
    <>
      <header>
        <nav className="nav-Navbar">
            <div className="logo">
               <img src="https://img.icons8.com/metro/26/null/shop.png"/>
               <h1>Store</h1> 
            </div>
            <div>
            <Search/>
            <Category/>
            </div>
            <ul>
                <li><a href="">Registrate</a></li>
                <li><a href="">Inicia Sesión</a></li>
                <li>
                  <button><img src="https://img.icons8.com/material/24/000000/add-shopping-cart--v1.png"/></button>  
                </li>
                <li>
                   <span>0</span>
                </li>
            </ul>
        </nav>
      </header>
       
    </>
  )
}
