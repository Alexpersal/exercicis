import "./RelojAnalogico.css";
import { useState, useEffect } from "react";

const grados_Seg_Min = 306 / 60;
const grados_hora = 306 / 12;

export default function RelojAnalogico() {
  const [milisegundos, setMilisegundos] = useState(
    new Date().getMilliseconds()
  );
  const [segundos, setSegundos] = useState(new Date().getSeconds());
  const [minutos, setMinutos] = useState(new Date().getMinutes());
  const [horas, setHoras] = useState(new Date().getHours());
  const [anguloSeg, setAnguloSeg] = useState(segundos * grados_Seg_Min);
  const [anguloMin, setAnguloMin] = useState(minutos * grados_Seg_Min);
  const [anguloHoras, SetAnguloHoras] = useState(horas * grados_hora);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setMilisegundos(new Date().getMilliseconds());
      setSegundos(new Date().getSeconds());
      setMinutos(new Date().getMinutes());
      setHoras(new Date().getHours());
      setAnguloSeg(
        Math.round((segundos + milisegundos / 1000) * grados_Seg_Min)
      );
      setAnguloMin(
        Math.round((minutos + milisegundos / 1000) * grados_Seg_Min)
      );
      SetAnguloHoras(Math.round((horas + milisegundos / 1000) * grados_hora));

      console.log(segundos + "segundos");
      console.log(minutos + "minutos");
      console.log(horas + "horas");
      console.log(anguloSeg);
      console.log(anguloHoras);
    }, 160);

    document.querySelector(
      ".segundero"
    ).style.transform = `rotate(${anguloSeg}deg)`;
    document.querySelector(
      ".minutero"
    ).style.transform = `rotate(${anguloMin}deg)`;
    document.querySelector(
      ".horas"
    ).style.transform = `rotate(${anguloHoras}deg)`;

    return () => clearInterval(intervalID);
  });

  return (
    <div className="contenido">
      <div className="marcoReloj">
        <div className="num3">3</div>
        <div className="num6">6</div>
        <div className="num9">9</div>
        <div className="num12">12</div>
        <div className="horas"></div>
        <div className="minutero"></div>
        <div className="segundero"></div>
      </div>
    </div>
  );
}
