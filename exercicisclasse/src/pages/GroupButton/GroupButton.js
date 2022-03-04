import "./GroupButton.css";
import { useState } from "react";

const botons = ["A", "B", "C"];

function GroupButton() {
  const [texto, setTexto] = useState("CAP");
  const [color, setColor] = useState("inicial");
  const [posicion, setPosicion] = useState("");

  function cambioTexto(i, n) {
    setTexto(botons[i]);
    setPosicion(n);
    color === "inicial" ? setColor("cambioColor") : setColor("inicial");
  }

  return (
    <div className="Marco">
      {" "}
      <div className="Boto">
        {botons.map((n, i) => (
          <button
            className={n === posicion ? color : "inicial"}
            key={i}
            onClick={() => cambioTexto(i, n)}
          >
            {botons[i]}
          </button>
        ))}
      </div>
      <div className="letraTexto">{texto}</div>
    </div>
  );
}
export default GroupButton;
