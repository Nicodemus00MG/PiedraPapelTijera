import React, { useState } from "react";

import "../components/Boton.css";

const Boton = ({ icon, handleValueButtom }) => {
  return (
    <div
      onClick={() => handleValueButtom(icon.name)}
      className="button_container"
    >
      <img src={icon.url} alt="" />
      <input type={"button"} />
    </div>
  );
};

export default Boton;
