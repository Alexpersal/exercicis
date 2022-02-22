import "./Carrusel.css";
import { useState } from "react";

function Carrusel() {
  const imagen = [
    "https://cdn.pixabay.com/photo/2017/03/29/15/18/tianjin-2185510_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/09/07/11/37/sunset-1651426_960_720.jpg",
  ];
  const [imgNext, setImgNext] = useState(
    "https://cdn.pixabay.com/photo/2017/03/29/15/18/tianjin-2185510_960_720.jpg"
  );
  const [posicio, setPosicio] = useState(0);

  function siguiente() {
    console.log(posicio);

    console.log(posicio);
    /*if (posicio < 3) {
      setImgNext(imagen[posicio]);
    }*/
  }

  function previa() {
    console.log(posicio);
    setPosicio((posicio) => posicio - 1);
    console.log(posicio);
    if (posicio > 0) {
      setImgNext(imagen[posicio]);
    }
  }
  return (
    <div className="Container">
      <button className="Izq" onClick={() => previa()}>
        boton izquierdo
      </button>
      <div className="Imagenes">
        <img className="Img" alt="imag1" src={imgNext}></img>
      </div>
      <button className="Der" onClick={() => siguiente()}>
        Boton derecho
      </button>
    </div>
  );
}
export default Carrusel;
