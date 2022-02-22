import { useState } from "react";
import "./TresEnRalla.css";

function TresEnRalla() {
  let inicio = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
  const [simbolo, setSimbolo] = useState("-");
  const [clicado, setClicado] = useState(null);

  function cambiaEstado(n) {
    console.log(n);
    console.log(n);
    if (simbolo === inicio[n]) {
      setSimbolo("X");
      inicio[n] = simbolo;
      console.log(inicio[n]);
    }
    /*  if (n === "2") {
      simbolo === inicio[+n] ? setSimbolo("X") : setSimbolo("-");
    }*/
  }

  return (
    <body>
      <div className="Tablero">
        <button className="1" onClick={() => cambiaEstado("0")}>
          {inicio[0]}
        </button>
        <button className="2" onClick={() => cambiaEstado("2")}>
          {inicio[1]}
        </button>
        <button className="3" onClick={() => cambiaEstado()}>
          {inicio[2]}
        </button>
        <button className="4" onClick={() => cambiaEstado()}>
          {inicio[3]}
        </button>
        <button className="5" onClick={() => cambiaEstado()}>
          {inicio[4]}
        </button>
        <button className="6" onClick={() => cambiaEstado()}>
          {inicio[5]}
        </button>
        <button className="7" onClick={() => cambiaEstado()}>
          {inicio[6]}
        </button>
        <button className="8" onClick={() => cambiaEstado()}>
          {inicio[7]}
        </button>
        <button className="9" onClick={() => cambiaEstado()}>
          {inicio[8]}
        </button>
      </div>
    </body>
  );
}
export default TresEnRalla;
