import React ,{useState}from 'react'

import "../components/Boton.css"







const Boton = ({icon}) => {
     
    function changeState(){
        // setOpcion(icon.name)
        console.log(opcion)  
    }

    const[opcion,setOpcion]=useState(icon.name)
   
return (
    
    <div onClick={changeState} className='button_container'>
        
    <img src={icon.url} alt="" />
    <input  type={"button"} />
    </div>
)
}

export default  Boton