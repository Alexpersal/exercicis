import "./Galeria.css";
//import react, { useState } from "react";
import coche1 from "./coche1.jpg";
import coche2 from "./coche2.jpg";
import coche3 from "./coche3.jpg";
import coche4 from "./coche4.jpeg";

function Galeria() {
  //const [foto, setFoto] = useState("");
  const imagenes = [coche1, coche2, coche3, coche4, "coche5"];
  function agrandar() {
    /* setFoto(imagenes[0]);
    setFoto.width = "50%";

    imagenes[0] = foto;*/
    alert(imagenes.map((n) => n));
    alert("hazte grande");
  }

  return (
    <div className="coches">
      {imagenes.map((n, i) => (
        <img src={n} key={i} height="auto" width="33%" alt={n} />
      ))}
      <img
        className="coche1"
        src={imagenes[0]}
        height="auto"
        width="33%"
        alt="coche1"
        onClick={() => agrandar()}
      ></img>
      <img src={imagenes[1]} height="auto" width="33%" alt="coche2" />
      <img src={imagenes[2]} height="auto" width="33%" alt="coche3" />
      <img src={imagenes[3]} height="auto" width="33%" alt="coche4" />
    </div>
  );
}

export default Galeria;
