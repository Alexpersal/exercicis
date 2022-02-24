import "./VectorEj2.css";

const numeros = [1, 2, 3, 4, 5, 6];
const nouElem = 55;

export default function VectorEj2() {
  var nouNumeros = [];
  var posicion = 4;
  var posicionIni = posicion;
  //numeros.splice(posicion, 0, nouElem); solucion mediante funcion splice

  for (let i = 0; i < posicion; i++) {
    nouNumeros[i] = numeros[i];
  }
  nouNumeros[posicion - 1] = nouElem;

  for (let i = posicion - 1; i < numeros.length; i++) {
    nouNumeros[posicion++] = numeros[i];
    console.log("valor i", i);
  }

  return (
    <div>
      <div>La secuencia original era: {numeros}</div>
      <div>posicion de insercion nuevo número: {posicionIni}</div>
      <div>El número a insertar es: {nouElem}</div>
      <div>La secuencia final es: {nouNumeros}</div>
    </div>
  );
}
