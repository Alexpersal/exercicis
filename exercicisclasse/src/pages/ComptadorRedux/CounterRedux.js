import "./CounterRedux.css";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementaCounter,
  decrementaCounter,
  resetCounter,
} from "./actions/counterActions";

export function CounterRedux() {
  const count = useSelector((store) => store.counterReducer.count);

  const dispatchCounter = useDispatch();

  return (
    <div className="caja">
      <div className="Calculadora">
        <div className="Display">{count}</div>
        <div className="Botones">
          <button
            className="inc1"
            onClick={() =>
              count < 10
                ? dispatchCounter(incrementaCounter(1))
                : alert("El número no puede superar el 10")
            }
          >
            Inc. +1
          </button>
          <button
            className="dec1"
            onClick={() =>
              count > 0
                ? dispatchCounter(decrementaCounter(1))
                : alert("El número no puede bajar de 0")
            }
          >
            Dec -1
          </button>
          <button
            className="inc5"
            onClick={() =>
              count < 6
                ? dispatchCounter(incrementaCounter(5))
                : alert("El número no puede superar el 10")
            }
          >
            Inc +5
          </button>
          <button
            className="clear"
            onClick={() => dispatchCounter(resetCounter())}
          >
            Resetear Contador
          </button>
        </div>
      </div>
    </div>
  );
}
