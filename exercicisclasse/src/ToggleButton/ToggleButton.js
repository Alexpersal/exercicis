import "./ToggleButton.css";
import { useState } from "react";

function ToggleButton() {
  const [clicado, setClicado] = useState("clicado");
  const [texto, setTexto] = useState("Botón no clicado");

  function Clicar() {
    clicado === "clicado" ? setClicado("noClicado") : setClicado("clicado");
    texto === "Botón no clicado"
      ? setTexto("Botón clicado")
      : setTexto("Botón no clicado");
  }

  return (
    <body>
      <div className="contenedor">
        <button className={clicado} onClick={() => Clicar()}>
          Pinchame
        </button>
        <h1>{texto}</h1>
      </div>
    </body>
  );
}
export default ToggleButton;
