import "./GroupButton.css";
import { useState } from "react";

const botons = ["A", "B", "C"];

function GroupButton() {
  const [texto, setTexto] = useState("CAP");
  const [color, setColor] = useState("inicial");
  const [posicion, setPosicion] = useState(null);

  function cambioTexto(i, n) {
    setTexto(botons[i]);
    setPosicion(n);
    console.log({ i });
    console.log({ n });
    color === "inicial" ? setColor("cambioColor") : setColor("inicial");
    console.log({ color });
  }

  return (
    <div className="Marco">
      {" "}
      <div className="Botones">
        {botons.map((n, i) => (
          <button
            className={n === posicion ? color : "inicial"}
            key={i}
            onClick={() => cambioTexto(i, n)}
          >
            {botons[i]}
          </button>
        ))}
        <div>{texto}</div>
      </div>
    </div>
  );
}
export default GroupButton;
