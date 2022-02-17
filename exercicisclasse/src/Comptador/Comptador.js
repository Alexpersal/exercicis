import "./Comptador.css";
import { useState } from "react";
const operador = ["+1", "-1", "+5"];

export default function App() {
  const [incrementa, setIncrementa] = useState(0);

<<<<<<< HEAD
  function Calcular(n) {
    if (incrementa < 10) {
      if (n === "+1") setIncrementa((num) => num + 1);
      if (incrementa < 6) {
        if (n === "+5") setIncrementa((num) => num + 5);
      }
    }
    if (incrementa > 0) {
      if (n === "-1") setIncrementa((num) => num - 1);
    }
=======
  function Suma() {
    incrementa < 10
      ? setIncrementa(incrementa + 1)
      : alert("no puede sumarse ya que el n úmero seria mayor a 10");
  }
  function Resta() {
    incrementa > 0
      ? setIncrementa(incrementa - 1)
      : alert("no puede sumarse ya que el n úmero seria menor a 0");
  }
  function Suma5() {
    incrementa < 6
      ? setIncrementa(incrementa + 5)
      : alert("no puede sumarse ya que el n úmero seria mayor a 10");
>>>>>>> ab0e6d0f2d73d968edc9e42a365859f39c2eed55
  }

  return (
    <div className="Comptador">
      <div className="Calculadora">
        <div className="Display"> {incrementa} </div>
        <div className="Botones">
<<<<<<< HEAD
          {operador.map((n) => (
            <button className={n} onClick={() => Calcular(n)}>
              {n}
            </button>
          ))}
=======
          <button onClick={Suma}>+1</button>
          <button onClick={Resta}>-1</button>
          <button onClick={Suma5}>+5</button>
>>>>>>> ab0e6d0f2d73d968edc9e42a365859f39c2eed55
        </div>
      </div>
    </div>
  );
}
<<<<<<< HEAD
export default Comptador;
=======
>>>>>>> ab0e6d0f2d73d968edc9e42a365859f39c2eed55
