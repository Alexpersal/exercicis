import { useState } from "react";
import "./TresEnRalla.css";

function TresEnRalla() {
  let inicio = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
  const [simbolo, setSimbolo] = useState("-");
  const [clicado, setClicado] = useState(null);

  function cambiaEstado(i) {
    setClicado(i);
    if (inicio[i] === "-") {
      if (i % 2 === 0) {
        setSimbolo("X");
        setClicado(i);
      } else {
        setSimbolo("Y");
        setClicado("Y");
      }
      inicio[i] = simbolo;
    }
    console.log(simbolo);
    console.log(clicado);
  }

  return (
    <div className="Tablero">
      {inicio.map((n, i) => (
        <button
          className={n === clicado ? simbolo : "Z"}
          key={i}
          onClick={() => cambiaEstado(i)}
        >
          {simbolo}
        </button>
      ))}
    </div>
  );
}
export default TresEnRalla;
