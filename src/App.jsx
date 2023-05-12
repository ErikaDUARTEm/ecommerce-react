import './App.css'
import ListProducts from './components/ListProducts'
import Navbar from './components/Navbar'
import Category from './components/Category'
import AllCategory from './components/AllCategory'

function App() {

  return (
    <>
      <Navbar/>
      <AllCategory/>
      <Category/>
      <ListProducts/>
    </>
  )
}

export default App
  