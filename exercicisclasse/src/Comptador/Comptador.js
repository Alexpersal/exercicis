import "./Comptador.css";
import { useState } from "react";
const operador = ["+1", "-1", "+5"];

export default function App() {
  const [incrementa, setIncrementa] = useState(0);
  //const [calculo, setcalculo] = useState("");

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
  }
  return (
    <div className="Comptador">
      <div className="Calculadora">
        <div className="Display"> {incrementa} </div>
        <div className="Botones">
          <button onClick={Suma}>+1</button>
          <button onClick={Resta}>-1</button>
          <button onClick={Suma5}>+5</button>
        </div>
      </div>
    </div>
  );
}
