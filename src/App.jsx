import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Smartphones from "./components/Smartphones";
import { FRAGRANCES, HOME, LOGIN, SINGUP, SMARTPHONES } from "./routes/routesPath";
import Login from "./components/Login";
import Register from "./components/Register";
import PublicRoute from './routes/PublicRoute';
import Home from './components/Home';
import Fragrances from './components/Fragrances';

function App() {

  return (
    <Router>
      <Routes>
        <Route path={HOME} element={<PublicRoute/>}>
          <Route index path={HOME} element={<Home/>}/>
          <Route path={SMARTPHONES} element={<Smartphones />} />
          <Route path={LOGIN} element={<Login />} />
          <Route path={SINGUP} element={<Register />} />
          <Route path={FRAGRANCES} element={<Fragrances/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App
  