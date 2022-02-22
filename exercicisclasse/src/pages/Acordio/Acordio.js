import "./Acordio.css";
import { useState } from "react";

function Acordio() {
  const [estado, setEstado] = useState("Inactivo");
  const [clicado, setClicado] = useState(0);

  const secciones = [
    {
      titulo: "MERCADONA",
      texto: "Patatas",
      texto2: "Pechuga de pollo",
      texto3: "Aceitunas",
    },
    {
      titulo: "BONPREU",
      texto: "Pepinillos",
      texto2: "Arroz",
      texto3: "Coca-cola",
    },
    {
      titulo: "CONDIS",
      texto: "Cebollas",
      texto2: "Aceite de oliva",
      texto3: "Calçots",
    },
  ];

  function mostrar(i) {
    setClicado(i);
    estado === "Activo" ? setEstado("Inactivo") : setEstado("Activo");
  }

  return (
    <div className="Post">
      LISTA DE LA COMPRA
      <div className="Titulo">
        {secciones.map((n, i) => (
          <div className="Primer" key={i} onClick={() => mostrar(i)}>
            {secciones[i].titulo}

            <li className={clicado === i ? estado : "Inactivo"}>
              {secciones[i].texto}
            </li>
            <li className={clicado === i ? estado : "Inactivo"}>
              {secciones[i].texto2}
            </li>
            <li className={clicado === i ? estado : "Inactivo"}>
              {secciones[i].texto3}
            </li>
            <br></br>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Acordio;
