import { useState } from "react";
import "./TresEnRalla.css";

function TresEnRalla() {
  let inicio = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
  const [simbolo, setSimbolo] = useState("-");
  //const [clicado, setClicado] = useState(null);

  function cambiaEstado(n) {
    console.log(n);
    console.log(n);
    //if (simbolo === inicio[n]) {
    setSimbolo("X");
    inicio[n] = simbolo;
    console.log(inicio[n]);
    // }
    /*  if (n === "2") {
      simbolo === inicio[+n] ? setSimbolo("X") : setSimbolo("-");
    }*/
  }

  return (
    <div>
      <div className="Tablero">
        <button className="1" key="1" onClick={() => cambiaEstado("0")}>
          {simbolo}
        </button>
        <button className="2" key="2" onClick={() => cambiaEstado("2")}>
          {simbolo}
        </button>
        <button className="3" key="3" onClick={() => cambiaEstado()}>
          {simbolo}
        </button>
        <button className="4" key="4" onClick={() => cambiaEstado()}>
          {simbolo}
        </button>
        <button className="5" key="5" onClick={() => cambiaEstado()}>
          {simbolo}
        </button>
        <button className="6" key="6" onClick={() => cambiaEstado()}>
          {simbolo}
        </button>
        <button className="7" key="7" onClick={() => cambiaEstado()}>
          {simbolo}
        </button>
        <button className="8" key="8" onClick={() => cambiaEstado()}>
          {simbolo}
        </button>
        <button className="9" key="9" onClick={() => cambiaEstado()}>
          {simbolo}
        </button>
      </div>
    </div>
  );
}
export default TresEnRalla;
