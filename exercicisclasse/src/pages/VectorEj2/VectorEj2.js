import "./VectorEj2.css";

const numeros = [1, 2, 3, 4, 5, 6];
const nouElem = 55;

export default function VectorEj2() {
  var nouNumeros = [];
  var numerosPont = [];
  var posicion = 3;
  //numeros.splice(posicion, 0, nouElem); solucion mediante funcion splice
  for (let i = 0; i < posicion; i++) {
    nouNumeros[i] = numeros[i];
  }
  nouNumeros[posicion++] = nouElem;
  console.log(posicion);
  console.log(numeros);
  console.log(nouNumeros);

  for (let i = posicion + 1; i < numeros.length; i++) {
    nouNumeros[i] = numeros[i];
  }

  return (
    <div>
      <div>La secuencia original era: {numeros}</div>
      <div>La secuencia original era: {nouNumeros}</div>
    </div>
  );
}
