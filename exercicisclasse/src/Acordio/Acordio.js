import "./Acordio.css";
//import { useState } from "react";

const textos = ["Hola", "Patata", "Aguacate"];

function Acordio() {
  return (
    <>
      <ul>Título</ul>
      {textos.map((n) => (
        <li key={n}>{n}</li>
      ))}
    </>
  );
}

export default Acordio;
