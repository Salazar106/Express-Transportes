import "./App.css";
import Cabecera from "./components/NavBar/Cabecera";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/acceso/login";
import SingUp from './components/acceso/registrate'
import Home from './components/HomePage/home'
const App = () => {
  return (
    <Router>
 
      <div className="Container">
        <Cabecera></Cabecera>
        </div>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/singUp" element={<SingUp/>}/>

      </Routes>
       
       
      
    </Router>
  );
};

export default App;
