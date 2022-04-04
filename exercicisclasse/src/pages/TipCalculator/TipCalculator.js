import { useState } from "react";
import "./TipCalculator.css";

export default function TipCalculator() {
  const [importeInicial, setImporteInicial] = useState();
  const [tip, setTip] = useState(0);
  const [suma, setSuma] = useState(0);
  const [redondeo, setRedondeo] = useState(0);
  const [incrementa, setIncrementa] = useState(1);
  const [check, setCheck] = useState("true");

  const totalCuenta = (importeIni, tip) => {
    const cuenta = (importeIni * tip) / 100;
    setSuma(parseFloat(importeIni) + cuenta);
  };

  const redondear = (check, importeIni) => {
    setRedondeo(suma);
    if (check === "true") {
      if (suma % 5 === 0) setSuma(suma + 5);
      else {
        let propina = Math.ceil(suma);
        setSuma(propina);
        while (propina % 5 !== 0) {
          propina = propina + 1;
          setSuma(propina);
        }
      }
      setCheck("false");
    } else {
      setCheck("true");
      setSuma(redondeo);
    }
  };

  function comensales(n) {
    setIncrementa(Math.max(1, Math.min(10, incrementa + +n)));
  }

  return (
    <div className="tipCalculator">
      <h2>Calcular cuenta Restaurante</h2>
      <div className="inicial">
        <label className="factura">Cuenta Restaurante:</label>
        <br />
        <input
          value={importeInicial}
          type={Number}
          onChange={(event) => setImporteInicial(event.target.value)}
        />
        €
        <br />
        <label className="propina">Cantidad Propina: </label>
        <br />
        <input
          value={tip}
          type={Number}
          onChange={(event) => setTip(event.target.value)}
        />
        %
        <br />
        <label className="TotalCuenta">Total cuenta con propina: </label>
        <br />
        <input value={suma} type={Number} />€
        <br />
        <button onClick={() => totalCuenta(importeInicial, tip)}>Sumar</button>
      </div>
      <div className="redondear">
        <input
          type="checkbox"
          name="redondeo"
          id="opt-in"
          onClick={() => redondear(check, tip)}
        />
        <label for="opt-in">Redondear hasta 5€</label>
      </div>
      <div className="numeroPax">
        <div className="Display"> {incrementa} </div>
        <div className="botonesPax">
          <button className="sumar" onClick={() => comensales("+1")}>
            +1
          </button>
          <button className="restar" onClick={() => comensales("-1")}>
            -1
          </button>
        </div>
      </div>
      <div className="final">
        Cuenta final por persona: {suma / incrementa}€
      </div>
    </div>
  );
}
