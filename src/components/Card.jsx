import React from 'react'

import Boton from './Boton.jsx'
import papel from '../assets/papel.svg'
import tijera from '../assets/tijera.svg'
import piedra from '../assets/piedra.svg'
import Score from "./Score.jsx"

let opciones=[{name:"papel",url:papel},{name:"tijera",url:tijera},{name:"piedra",url:piedra}]





let styleCard={


    display:"flex",
    flexDirection:"column",
    justifyContent: "space-evenly",
  alignItems: "center",
  minHeight: "100%",
   borderTopLeftRadius: "10px",
  borderTopRightRadius:"10px" ,
  borderBottomLeftRadius:"10px" ,
  borderBottomRightRadius:"10px" ,
  
    // flexDirection:"column",
    width: "800px",
  height: "500px",
  backgroundColor: "white"
}


let styleButtonContainer={
    display:"flex",
    flexDirection:"row",
   gap:"7rem"
}


const Card = () => {

  return (
    <div style={styleCard} className='card_container'>
        <Score/>
    <div style={styleButtonContainer} className="boton_container">
    <Boton  icon={opciones[0]} />
     <Boton icon={opciones[1]} />
     <Boton icon={opciones[2]} />
    </div>
     
    </div>
  )
}

export default Card