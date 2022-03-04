import { useState, useEffect } from "react";
import "./RelojDigital.css";

const time = new Date();

function RelojDigital() {
  let fecha =
    time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
  const [seg, setSeg] = useState({ fecha });

  useEffect(() => {
    setInterval(() => {
      setSeg((n) => n + 1);
    }, 1000);
  }, []);
  console.log(fecha);
  console.log(seg);

  return <div className="hora">{fecha.time.seg}</div>;
}
export default RelojDigital;
