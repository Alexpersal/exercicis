import { useState } from "react";

export default function TipCalculator() {
  const [importeIni, setImporteIni] = useState();
  const [suma, setSuma] = useState(0);

  const totalCuenta = (importeIni) => {
    setSuma(parseInt(importeIni) + parseInt(suma));
  };

  return (
    <>
      <h2>Calcular cuenta Restaurante</h2>
      <label className="Factura">Cuenta Restaurante:</label>
      <input
        value={importeIni}
        type={Number}
        onChange={(event) => setImporteIni(event.target.value)}
      />
      <br />
      <label className="sumaTotal">Propina: </label>
      <input value={suma + "%"} type={Number} />
      <br />
      <button onClick={() => totalCuenta(importeIni)}>Sumar</button>
    </>
  );
}
