import "./VectorEj3.css";

const numeros = [1, 2, 3, 3, 4, 5, 6, 4];
const nouNumeros = numeros.slice();

export default function VectorEj3() {
  var num = null;
  var posicion = null;

  for (let i = 0; i < numeros.length; i++) {
    num = numeros[i];

    posicion = i;
    for (let n = 0; n < numeros.length; n++) {
      if (num === numeros[n] && posicion !== n) {
        numeros.splice(i, 1);
      }
    }
    console.log({ nouNumeros });
  }

  return (
    <div>
      <div>La secuencia original era: {nouNumeros}</div>
      <div>La secuencia final es: {numeros}</div>
    </div>
  );
}
