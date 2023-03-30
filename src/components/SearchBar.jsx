import  React,{useState} from "react"
const SearchBar  = () =>{
 const [valorIni ,setearIni] = useState("");
 const  ActualizaIni = (evento) =>{
      
      setearIni(evento.target.value);
 }

 const pulsarBuscar = ()=>{

        valorIni !==""?    window.alert( "hacemos como si buscamos el personaje") : window.alert("ingrese un valor")

 }
    return (
        <div>


       
     <input  type="text" placeholder="buscar..."  value={valorIni}  onChange={ActualizaIni}></input>
     <button onClick={pulsarBuscar} >  Buscar</button>

     </div>
    );

}

export default SearchBar