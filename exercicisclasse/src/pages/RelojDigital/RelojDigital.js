import { useState, useEffect } from "react";
import "./RelojDigital.css";
const dias = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];
const mes = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

function RelojDigital() {
  const [horario, setHorario] = useState(new Date().toLocaleTimeString());

  let diaSem = new Date();
  diaSem = diaSem.getDay();
  let fecha = new Date();
  fecha =
    fecha.getDate() +
    " de " +
    mes[fecha.getMonth()] +
    " de " +
    fecha.getFullYear();

  useEffect(() => {
    setInterval(() => {
      setHorario(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div className="MarcoRelojDig">
      <div className="relojDigital">
        <div className="hora"> {horario}</div>
        <div className="fechaReloj">
          {dias[diaSem]} , {fecha}
        </div>
      </div>
    </div>
  );
}
export default RelojDigital;
