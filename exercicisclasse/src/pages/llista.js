import Comptador from "./Comptador/Comptador";
import Galeria from "./Galeria/Galeria";
import ToggleButton from "./ToggleButton/ToggleButton";
import Acordio from "./Acordio/Acordio";
import Carrusel from "./Carrusel/Carrusel";
import TresEnRalla from "./TresEnRalla/TresEnRalla";

const llista = [
  { path: "Comptador", titol: "comptador", Element: <Comptador /> },
  { path: "Galeria", titol: "Galeria de fotos", Element: <Galeria /> },
  {
    path: "ToggleButton",
    titol: "Boton que cambia",
    Element: <ToggleButton />,
  },
  { path: "Acordio", titol: "Texte en Acordio", Element: <Acordio /> },
  { path: "Carrusel", titol: "Carruselk de fotos", Element: <Carrusel /> },
  {
    path: "TresEnRalla",
    titol: "Juego Tres en ralla",
    Element: <TresEnRalla />,
  },
];

export default llista;
