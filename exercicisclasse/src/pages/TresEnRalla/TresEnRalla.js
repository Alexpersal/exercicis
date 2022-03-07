import { useState } from "react";
import "./TresEnRalla.css";
let inicio = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
function TresEnRalla() {
  const [simbolo, setSimbolo] = useState("-");
  const [clicado, setClicado] = useState(0);

  function cambiaEstado(i) {
    console.log(i);
    let copia = [...inicio];
    setClicado(i);
    if (copia[clicado] === "-") {
      if (i % 2 === 0) {
        setSimbolo((copia[clicado] = "X"));
        inicio.splice(clicado, 1, simbolo);
        //setClicado(i);
      } else {
        setSimbolo((copia[clicado] = "O"));
        inicio.splice(clicado, 1, simbolo);
        //setClicado(i);
      }
    }
    console.log(i);

    console.log(simbolo);

    console.log("inicio" + inicio);
  }

  return (
    <div className="Tablero">
      {inicio.map((n, i) => (
        <button
          className={n /*=== clicado ? simbolo : "O"*/}
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
