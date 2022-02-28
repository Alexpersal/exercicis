import "./Galeria.css";
import { useState } from "react";

function Galeria() {
  const imagenes = [
    "https://cdn.pixabay.com/photo/2015/05/28/23/12/auto-788747_960_720.jpg",
    "https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930_960_720.jpg",
    "https://cdn.pixabay.com/photo/2019/07/07/14/03/fiat-4322521_960_720.jpg",
    "https://cdn.pixabay.com/photo/2018/01/18/20/56/auto-3091234_960_720.jpg",
  ];
  const [ampliar, setAmpliar] = useState("foto"); //nombre inicial de la clase de la imagen, guarda los valores iniciales
  const [imatgeClicada, setImatgeClicada] = useState(null);

  function agrandar(n) {
    setImatgeClicada(n);
    ampliar === "foto" ? setAmpliar("ampliar") : setAmpliar("foto");
  }

  return (
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
  );
}

export default Galeria;
