import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Smartphones from "./components/Smartphones";
import { FRAGRANCES, GROCERIES, HOME, LAPTOS, LOGIN, SINGUP, SKINCARE, SMARTPHONES } from "./routes/routesPath";
import Login from "./components/Login";
import Register from "./components/Register";
import PublicRoute from './routes/PublicRoute';
import Home from './components/Home';
import Fragrances from './components/Fragrances';
import Laptos from './components/Laptos';
import Skincare from './components/Skincare';
import Groceries from './components/Groceries';
import Navbar from './components/Navbar';

function App() {

  return (
    <Router>
     <Navbar />
      <Routes>
        <Route path={HOME} element={<PublicRoute/>}>
          <Route index path={HOME} element={<Home/>}/>
          <Route path={SMARTPHONES} element={<Smartphones />} />
          <Route path={LOGIN} element={<Login />} />
          <Route path={SINGUP} element={<Register />} />
          <Route path={FRAGRANCES} element={<Fragrances/>}/>
          <Route path={LAPTOS} element={<Laptos/>} />
          <Route path={SKINCARE} element={<Skincare />} />
          <Route path={GROCERIES} element={<Groceries/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App
  