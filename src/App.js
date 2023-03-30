import React from "react";
import characters,{Rick} from "./data";
import { useState,useEffect } from "react";

import './App.css'
import Cards from "./components/Cards";
import NavBar from "./components/Nav";
import axios, { Axios } from "axios";
import { Route,Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
const App = () =>{
  
// me traigo a los personasjes de la api  con fecth ,axios utilizando una funcion asincrona 

   const [personajes, setPersonaje] = useState([]);


   async function traerPersonaje (){
        fetch("https://rickandmortyapi.com/api/character")
        .then((respuesta)=>respuesta.json())
        .then(datos =>  setPersonaje(datos.results))
        .catch(error => console.log(error))
   }

   useEffect(() =>{
       traerPersonaje();
   }, [])
 console.log(personajes) ;
       return  (
     <div className="App">
           <NavBar/>
           <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/home" element={<Home/>}/>
                  <Route path="/login" element ={<Login/>}  ></Route>
                  


             </Routes>
           {  /* 
         <div>
              <Card   
               id = {Rick.id}
               name = {Rick.name}
               gender = {Rick.gender}
               species = {Rick.species}
               image = {Rick.image} 
               onClose = {()=> window.alert(" emolamos que se cierre la Card")}       
             />

          </div>
           */
}

          <div>
            
                 <Cards characters = { personajes}/>
            
          </div>
             
            

     </div>
         
       ) ;

}

export default  App ; 