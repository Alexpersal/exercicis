import "./RelojAnalogico.css";
import { useState, useEffect } from "react";

export default function RelojAnalogico() {
  const [segundos, setSegundos] = useState(new Date().getSeconds());
  const [minutos, setMinutos] = useState(new Date().getMinutes());
  const [horas, setHoras] = useState(new Date().getHours());
  const [anguloSeg, setAnguloSeg] = useState(segundos * Math.round(360 / 60));
  const [anguloMin, setAnguloMin] = useState(minutos * Math.round(360 / 60));
  const [anguloHoras, SetAnguloHoras] = useState(horas * Math.round(360 / 12));

  useEffect(() => {
    const intervalID = setInterval(() => {
      setSegundos(new Date().getSeconds());
      setMinutos(new Date().getMinutes());
      setHoras(new Date().getHours());
      setAnguloSeg(segundos * Math.round(360 / 60));
      setAnguloMin(minutos * Math.round(360 / 60));
      SetAnguloHoras(horas * Math.round(360 / 12));

      console.log(segundos + "segundos");
      console.log(minutos + "minutos");
      console.log(horas + "horas");
      console.log(anguloSeg);
      console.log(anguloHoras);
    }, 1000);

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
