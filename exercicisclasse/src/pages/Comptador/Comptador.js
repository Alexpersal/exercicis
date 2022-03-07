import "./Comptador.css";
import { useState } from "react";

const operador = ["+1", "-1", "+5"];

function Comptador() {
  const [incrementa, setIncrementa] = useState(0);

  function Calcular(n) {
    /*setIncrementa(Math.max(0, Math.min(10, incrementa + +n))); //Solucio 1 David*/
    /*let resultat = incrementa + +n; //Solucio 2 David
    if (0 <= resultat && resultat <= 10) setIncrementa(resultat);*/

    if (incrementa < 10) {
      if (n === "+1") setIncrementa((num) => num + 1);
      if (incrementa < 6) {
        if (n === "+5") setIncrementa((num) => num + 5);
      }
    }
    if (incrementa > 0) {
      if (n === "-1") setIncrementa((num) => num - 1);
    }
  }

  return (
    <div className="caja">
      <div className="Calculadora">
        <div className="Display"> {incrementa} </div>
        <div className="Botones">
          {operador.map((n) => (
            <button className={n} onClick={() => Calcular(n)}>
              {n}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Comptador;
