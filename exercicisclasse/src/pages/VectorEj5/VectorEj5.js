import "./VectorEj5.css";

const numeros = [1, 2, 1, 2, 1, 2, 1, 2];
const letras = [" A", " B", " A", " B", " A", " B", " A", " B"];

export default function VectorEj5() {
  var result = [];

  for (let i = 0; i < numeros.length; i++) {
    result = result.concat(letras[i], numeros[i]);

    console.log(letras);
  }

  return (
    <div>
      <div>La secuencia original1 es: {numeros}</div>
      <div>La secuencia original2 es: {letras}</div>
      <div>La secuencia final es: {result}</div>
    </div>
  );
}
