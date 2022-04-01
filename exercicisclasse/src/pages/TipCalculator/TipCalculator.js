import { useState } from "react";

export default function TipCalculator() {
  const [importeInicial, setImporteInicial] = useState();
  const [tip, setTip] = useState(0);
  const [suma, setSuma] = useState(0);
  const [redondeo, setRedondeo] = useState(0);
  const [incrementa, setIncrementa] = useState(1);

  const totalCuenta = (importeIni, tip) => {
    const propina = (importeIni * tip) / 100;
    setSuma(parseFloat(importeIni) + propina);
    console.log(propina);
    console.log(suma);
  };

  const redondear = () => {
    if (suma % 5 === 0) setRedondeo(suma + 5);
    else {
      //no funciona todavia el redondeo si no es 5 o 10
      setRedondeo(Math.ceil(suma));
      console.log(redondeo + "redondeo");
      while (redondeo % 5 !== 0) setRedondeo((num) => num + 1);
    }
  };

  function comensales(n) {
    if (incrementa < 10) {
      if (n === "+1") setIncrementa((num) => num + 1);
    }
    if (incrementa > 1) {
      if (n === "-1") setIncrementa((num) => num - 1);
    }
  }

  return (
    <>
      <h2>Calcular cuenta Restaurante</h2>
      <label className="factura">Cuenta Restaurante:</label>
      <input
        value={importeInicial}
        type={Number}
        onChange={(event) => setImporteInicial(event.target.value)}
      />
      €
      <br />
      <label className="propina">Cantidad Propina: </label>
      <input
        value={tip}
        type={Number}
        onChange={(event) => setTip(event.target.value)}
      />
      %
      <br />
      <label className="TotalCuenta">Total cuenta con propina: </label>
      <input value={suma} type={Number} />
      €
      <br />
      <button onClick={() => totalCuenta(importeInicial, tip)}>Sumar</button>
      <div>
        <input
          type="checkbox"
          name="redondeo"
          id="opt-in"
          onClick={() => redondear()}
        />
        <label for="opt-in">Redondear a 5€</label>
        <br />
        <label for="opt-in">Total con redondeo {redondeo}€</label>
      </div>
      <div>
        <div className="Display"> {incrementa} </div>
        <button className="sumar" onClick={() => comensales("+1")}>
          +1
        </button>
        <button className="restar" onClick={() => comensales("-1")}>
          -1
        </button>
      </div>
      <div>Cuenta final por persona: {suma / incrementa}</div>
    </>
  );
}
