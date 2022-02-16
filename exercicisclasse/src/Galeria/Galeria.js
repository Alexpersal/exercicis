import "./Galeria.css";
import { useState } from "react";

function Galeria() {
  const imagenes = [
    "imagenes/coche1.jpg",
    "imagenes/coche2.jpg",
    "imagenes/coche3.jpg",
    "imagenes/coche4.jpeg",
  ];
  const [ampliar, setAmpliar] = useState("foto"); //nombre inicial de la clase de la imagen, guarda los valores iniciales
  const [imatgeClicada, setImatgeClicada] = useState(null);

  function agrandar(n) {
    setImatgeClicada(n);
    ampliar === "foto" ? setAmpliar("ampliar") : setAmpliar("foto");
  }

  return (
    <body className="contenedor">
      <div className="coches">
        {imagenes.map((n, i) => (
          <img
            className={n === imatgeClicada ? ampliar : "foto"}
            src={n}
            key={i}
            alt={n}
            onClick={() => agrandar(n)}
          />
        ))}
      </div>
    </body>
  );
}

export default Galeria;
