
import Search from "./Search";

export default function Navbar() {
  return (
    <>
      <header>
        <nav className="nav-Navbar">
            <div className="logo">
            <img width="64" height="64" src="https://img.icons8.com/wired/64/000000/shop.png" alt="shop"/>
                <h1>Store</h1> 
            </div>
            <div className="container-nav-list">
            <ul className="nav-list">
                <li><a href="">Sign up</a></li>|
                <li><a href="">Login</a></li>
                <li className="car">
                  <button className="car-button"><img src="https://img.icons8.com/material/24/000000/add-shopping-cart--v1.png"/></button>  
                  <span>0</span>
                </li>
            </ul>
            </div>
            <div>
            <Search/>
            
           
          </div>
        </nav>

      </header>
       
    </>
  )
}
