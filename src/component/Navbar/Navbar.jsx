import "./Navbar.css";
import Search from "../search/Search";
import { AiOutlineMenu , AiOutlineClose} from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    let [menuiconopen , setmenuiconopen]=useState(false)
  return (
    <div className="Navbar">
        <nav>
          <div className="logo">
            <Link to={"/"} >
            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR0Cf2e3dRZQJUrEU4E92l_jAeIK0JITkR2Sakm3myll_N_IIKH" alt="logo" />
            
            </Link>
            <Link to={"/"} >
            <p>MyCinema</p>
            </Link>
            
          </div> 
          <ul className={menuiconopen ? "ul2" : "ul1"}>
            <Link to={"Subscribe"}><li onClick={()=>{setmenuiconopen(false)}} className="active" >Subscribe</li></Link>
            <Link to={"/"}><li onClick={()=>{setmenuiconopen(false)}} >For You</li> </Link>
            <Link to={"Movie"}><li onClick={()=>{setmenuiconopen(false)}} >Movies</li> </Link>
            <Link to={ "Tv"}><li onClick={()=>{setmenuiconopen(false)}} >TVs</li> </Link>
            <Link to={ "Premium"}><li onClick={()=>{setmenuiconopen(false)}} >Premium</li> </Link>
          </ul>
        
         <div className={menuiconopen ? "Search2" : "Search"} >
          <Search />
         </div>
         <div className={menuiconopen ? "info2" : "info"} >
          <Link to={"SignIn"} >
          <img
            src="https://www.jiocinema.com/images/profile/profile_avatar.svg"
            alt=""
          />
          </Link>
         </div>

         <div onClick={()=>{setmenuiconopen(true)}} className={menuiconopen ? "menuiconopenhide" : "menuiconopen"} >
            <AiOutlineMenu />
         </div>
         <div onClick={()=>{setmenuiconopen(false)}} className={menuiconopen ? "menuiconclose" : "menuiconclosehide"} >
            <AiOutlineClose />
         </div>
        </nav>
    
    </div>
  );
};

export default Navbar;
