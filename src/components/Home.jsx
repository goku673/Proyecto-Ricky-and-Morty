import React from "react";
import { Link ,NavLink} from "react-router-dom";
const  Home = ()=>{

    return (
        <div>
              <div> home</div>
              <Link to="/">  <p> regresar </p></Link>
              <NavLink to="/login">  <p>registrarse</p></NavLink>
              <NavLink to="/Cards"> <p> personajes</p></NavLink>
        </div>
        
    ) ; 
}

export default Home;