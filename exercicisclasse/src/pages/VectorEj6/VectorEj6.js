import "./VectorEj6.css";

const numeros = [0, 1, 2, 3, 4];
const letras = [" A", " B"];

export default function VectorEj6() {
  var result = [];

  for (let i = 0; i < numeros.length; i++) {
    for (let n = 0; n < letras.length; n++)
      result = result.concat(letras[n], numeros[i]);
  }

  return (
    <div>
      <div>La secuencia original1 es: {numeros}</div>
      <div>La secuencia original2 es: {letras}</div>
      <div>La secuencia final es: {result}</div>
    </div>
  );
}
