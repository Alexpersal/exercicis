import "./VectorEj1.css";

const numeros = [63, 45, 78, 58, 100, 56];

export default function VectorEj1() {
  let num1 = 0;
  let suma = 0;
  let media = 0;
  let mayor = 0;
  let menor = 0;
  var nuevoarray = [];

  for (let i = 0; i < numeros.length; i++) {
    num1 = numeros[i];
    nuevoarray[i] = numeros[i] + ",";
    suma = num1 + suma;
    mayor = num1;
    menor = num1;
    for (let n = 0; n < numeros.length; n++) {
      if (mayor < numeros[n]) mayor = numeros[n];
      if (menor > numeros[n]) menor = numeros[n];
    }
  }
  media = suma / numeros.length;

  return (
    <div>
      <div>La secuencia de los números a operar son: {nuevoarray}</div>
      <div>Suma de los números es: {suma}</div>
      <div>media de los números es: {media}</div>
      <div> El numero mayor es: {mayor}</div>
      <div> El numero menor es: {menor}</div>
    </div>
  );
}
