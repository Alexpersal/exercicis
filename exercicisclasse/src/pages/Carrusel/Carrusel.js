import "./Carrusel.css";
import { useState } from "react";

function Carrusel() {
  const imagen = [
    "https://cdn.pixabay.com/photo/2017/03/29/15/18/tianjin-2185510_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/09/07/11/37/sunset-1651426_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
  ];

  const [posicio, setPosicio] = useState(0);
  const [resalta, setResalta] = useState("sinResaltar");

  function siguiente() {
    if (posicio < imagen.length - 1) {
      setPosicio((posicio) => posicio + 1);
    }
  }

  function previa() {
    if (posicio > 0) setPosicio(posicio - +1);
  }

  function slideCambiaImagen(i) {
    setPosicio(i);
    console.log(resalta);
    resalta === "sinResaltar"
      ? setResalta("resaltar")
      : setResalta("sinResaltar");
    console.log(resalta);
  }

  return (
    <body>
      <div className="Container">
        <img
          className="skipLeft"
          alt="Skip left"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Skip_to_left3.svg/256px-Skip_to_left3.svg.png"
          onClick={() => previa()}
        />{" "}
        <div className="contenedor-imagenes">
          <img className="Img" alt="imag1" src={imagen[posicio]}></img>
        </div>
        <img
          className="skipRight"
          alt="Skip Right"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Skip_to_right3.svg/256px-Skip_to_right3.svg.png"
          onClick={() => siguiente()}
        />
      </div>
      <div className="slide">
        {imagen.map((n, i) => (
          <div
            className={n !== posicio ? resalta : "sinResaltar"}
            key={i}
            onClick={() => slideCambiaImagen(i)}
          ></div>
        ))}
      </div>
    </body>
  );
}
export default Carrusel;
