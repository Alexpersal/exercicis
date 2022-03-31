import { useState } from "react";

export default function SumadorNumeros() {
  const [valor, setValor] = useState();
  const [suma, setSuma] = useState(0);

  const sumarNumeros = (valor) => {
    setSuma(parseInt(valor) + parseInt(suma));
  };

  console.log(suma);
  return (
    <>
      <h1>Introduzca un valor inicial</h1>
      <label className="valorInicial">Valor:</label>
      <input
        value={valor}
        type={Number}
        onChange={(event) => setValor(event.target.value)}
      />
      <br />
      <label className="sumaTotal">Total: </label>
      <input value={suma} type={Number} />
      <br />
      <button onClick={() => sumarNumeros(valor)}>Sumar</button>
    </>
  );
}
