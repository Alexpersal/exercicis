import "./Carrusel.css";
import { useState } from "react";

function Carrusel() {
  const imagen = [
    "https://cdn.pixabay.com/photo/2017/03/29/15/18/tianjin-2185510_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/09/07/11/37/sunset-1651426_960_720.jpg",
  ];
  /*const [imgNext, setImgNext] = useState(
    "https://cdn.pixabay.com/photo/2017/03/29/15/18/tianjin-2185510_960_720.jpg"
  );*/
  const [posicio, setPosicio] = useState(0);

  function siguiente() {
    if (posicio < imagen.length - 1) {
      console.log(posicio);
      setPosicio((posicio) => posicio + 1);
      console.log(posicio);
    }
  }

  function previa() {
    if (posicio > 0) setPosicio(posicio - +1);
  }
  return (
    <body>
      <div className="Container">
        <button className="Izq" onClick={() => previa()}>
          boton izquierdo
        </button>
        <div className="contenedor-imagenes">
          <img className="Img" alt="imag1" src={imagen[posicio]}></img>
        </div>
        <button className="Der" onClick={() => siguiente()}>
          Boton derecho
        </button>
      </div>
      <div className="slide">
        {imagen.map((n) => (
          <div className={n}>o</div>
        ))}
      </div>
    </body>
  );
}
export default Carrusel;
