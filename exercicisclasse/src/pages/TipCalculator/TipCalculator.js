import { useState } from "react";

export default function TipCalculator() {
  const [importeInicial, setImporteInicial] = useState();
  const [tip, setTip] = useState(0);
  const [suma, setSuma] = useState(0);

  const totalCuenta = (importeIni, tip) => {
    const propina = (importeIni * tip) / 100;
    setSuma(parseFloat(importeIni) + propina);
    console.log(propina);
    console.log(suma);
  };

  const redondeo = () => {
    if (suma % 5 === 0) console.log(suma % 5);
    else return console.log("capullo");
  };

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
          onClick={() => redondeo()}
        />
        <label for="opt-in">Redondear a 5€</label>
      </div>
    </>
  );
}
