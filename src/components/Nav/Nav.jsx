import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
const  NavBar =() =>{

      return (
              <div>
                 
                    <Link  to="/home">  <button>Home</button>     </Link>
                    <Link to="/about"> <button>About</button></Link>
                    <Link to= "/login"> <button>login</button></Link>
                    <SearchBar/>
              </div>
      ); 
}

export default NavBar ; 