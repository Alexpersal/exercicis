import "./Acordio.css";
import { useState } from "react";

const [clicado, setClicado] = useState(null);
const [muestra, setMuestra] = useState("mostrado");

function Acordio() {
  function mostrar() {}

  return (
    <div>
      <div className="Acordeon">Titulo</div>
      <div
        className={Clicado === "mostrado" ? muestra : "mostrado"}
        onClick={patata()}
      >
        hola
      </div>
    </div>
  );
}

export default Acordio;
