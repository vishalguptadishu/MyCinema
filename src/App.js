import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Subscribe from "./pages/Subscribe/Subscribe";
import Movie from "./pages/Movie/Movie";
import Tv from "./pages/Tv/Tv";
import Premium from "./pages/Premium/Premium";
import LogIn from './pages/LogIn/LogIn';
import SignIn from './pages/SignIn/SignIn';
import Footer from "./component/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Aboute from "./pages/Aboute/Aboute";

function App() {
  return (
    <div className="App">
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Subscribe" element={<Subscribe />} />
        <Route path="/Movie" element={<Movie />} />
        <Route path="/Tv" element={<Tv />} />
        <Route path="/Premium" element={<Premium />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/SignIn" element={<SignIn />} /> 
        <Route path="/Aboute" element={<Aboute />} />
      </Routes>
      <Footer />

      
    </div>
  );
}

export default App;
