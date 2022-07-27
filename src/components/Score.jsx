import React from "react";
import { useState } from "react";
import "../components/Score.css";

let styleScore = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
  borderBottomLeftRadius: "10px",
  borderBottomRightRadius: "10px",

  width: "700px",
  height: "100px",
  background: "radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%))",
  color: "white",
  gap: "1rem",
};

const Score = ({ valueButtom }) => {
  let initDisplay = "Escoge tu opción para comenzar la partida ";
  const display =
    valueButtom == null ? initDisplay : "Tu escogiste: " + valueButtom;
  let buttomStyleNext = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  if (display == "Tu escogiste: " + valueButtom) {
    buttomStyleNext.display = "flex";
  } else {
    buttomStyleNext.display = "none";
  }
  const [opcionComputadora, setNum] = useState(parseInt(Math.random() * 3));
  const [opcionPCP, setopcionPCP] = useState("");
  function calcular() {
    setNum(parseInt(Math.random() * 3));

    
    if (opcionComputadora) {

        //! uso tijera
      //opcionComputadora =0 es tijera
      if (valueButtom === "tijera" && opcionComputadora === 0) {
        setopcionPCP("la computadora uso: tijera "+"EMPATE")
      

        //opcion=1 es piedra
      } else if (valueButtom === "tijera" && opcionComputadora === 1) {
        
        setopcionPCP("la computadora uso: piedra "+"PIERDE")
        //opcion=2 es papel
      } else if (valueButtom === "tijera" && opcionComputadora === 2) {
      

        setopcionPCP("la computadora uso: papel "+"GANASTE")
        //! uso piedra
      }else if (valueButtom === "piedra" && opcionComputadora === 0) {
       
        setopcionPCP("la computadora uso: tijera "+"GANASTE!")

        //opcion=1 es piedra
      } else if (valueButtom === "piedra" && opcionComputadora === 1) {
        
        setopcionPCP("la computadora uso: piedra "+"EMPATE")
        //opcion=2 es papel
      } else if (valueButtom === "piedra" && opcionComputadora === 2) {
        
        setopcionPCP("la computadora uso: papel "+"PIERDES")
        //!uso papel
      }else if (valueButtom === "papel" && opcionComputadora === 0) {
       
        setopcionPCP("la computadora uso: tijera "+"PIERDES!")

        //opcion=1 es piedra
      } else if (valueButtom === "papel" && opcionComputadora === 1) {
        
        setopcionPCP("la computadora uso: piedra "+"GANASTE!")
        //opcion=2 es papel
      } else if (valueButtom === "papel" && opcionComputadora === 2) {
        
        setopcionPCP("la computadora uso: papel "+"EMPATE")
      }


    }
  }
  return (
    <div style={styleScore} className="score">
      <h2>{display}</h2>
      <h2>{opcionPCP}</h2>

      <button
        onClick={calcular}
        style={buttomStyleNext}
        className="buttomOption"
      >
        Jugar!
      </button>
    </div>
  );
};

export default Score;
