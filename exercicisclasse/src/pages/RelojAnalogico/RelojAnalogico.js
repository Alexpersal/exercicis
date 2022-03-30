import "./RelojAnalogico.css";
import { useState, useEffect } from "react";

const angulo_Segundos_Minutos = 360 / 60;
const angulo_Horas = 360 / 12;

export default function RelojAnalogico() {
  const [segundos, setSegundos] = useState(new Date().getSeconds());
  const [minutos, setMinutos] = useState(new Date().getMinutes());
  const [horas, setHoras] = useState(new Date().getHours());
  const [anguloSeg, setAnguloSeg] = useState(
    segundos * angulo_Segundos_Minutos
  );
  const [anguloMin, setAnguloMin] = useState(minutos * angulo_Segundos_Minutos);
  const [anguloHoras, SetAnguloHoras] = useState(horas * angulo_Horas);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setSegundos(new Date().getSeconds());
      setMinutos(new Date().getMinutes());
      setHoras(new Date().getHours());
      setAnguloSeg(segundos * angulo_Segundos_Minutos);
      setAnguloMin(minutos * angulo_Segundos_Minutos);
      SetAnguloHoras(horas * angulo_Horas);

      console.log(segundos + "segundos");
      console.log(minutos + "minutos");
      console.log(horas + "horas");
      console.log(anguloSeg);
      console.log(anguloHoras);
    }, 1000);

    return () => clearInterval(intervalID);
  });

  return (
    <div className="contenido">
      <div className="marcoReloj">
        <div className="num3">3</div>
        <div className="num6">6</div>
        <div className="num9">9</div>
        <div className="num12">12</div>
        <div
          className="horas"
          style={{ transform: `rotate(${anguloHoras}deg)` }}
        ></div>
        <div
          className="minutero"
          style={{ transform: `rotate(${anguloMin}deg)` }}
        ></div>
        <div
          className="segundero"
          style={{ transform: `rotate(${anguloSeg}deg)` }}
        ></div>
      </div>
    </div>
  );
}
