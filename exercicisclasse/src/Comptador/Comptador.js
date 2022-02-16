import { useState } from "react";
import "./Comptador.css";

const operador = ["+1", "-1", "+5"];

function Comptador() {
  const [incrementa, setIncrementa] = useState(0);
  //const [calculo, setcalculo] = useState("");

  function Display() {
    setIncrementa(incrementa + 1);
    //if (calculo === "+1" && incrementa < 10) setIncrementa(incrementa + 1);
    console.log(incrementa);
    if (incrementa < 10) setIncrementa(incrementa + 1);
    //if (incrementa > 0) setIncrementa(incrementa - 1);
  }
  return (
    <div className="Comptador">
      <div className="Display"> {incrementa} </div>
      <br />
      {operador.map((n, i) => (
        <button onClick={Display()}>{n}</button>
      ))}
    </div>
  );
}

export default Comptador;
