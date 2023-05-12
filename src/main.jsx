import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import ProductsContextProvider  from './context/ProductsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProductsContextProvider>
      <App />
  </ProductsContextProvider>
  
   
  
)
