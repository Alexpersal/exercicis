import Comptador from "./Comptador/Comptador";
import Galeria from "./Galeria/Galeria";
import ToggleButton from "./ToggleButton/ToggleButton";
import Acordio from "./Acordio/Acordio";
import Carrusel from "./Carrusel/Carrusel";
import TresEnRalla from "./TresEnRalla/TresEnRalla";
import VectorEj1 from "./VectorEj1/VectorEj1";
import VectorEj2 from "./VectorEj2/VectorEj2";
import GroupButton from "./GroupButton/GroupButton";

const llista = [
  { path: "Comptador", titol: "comptador", Element: <Comptador /> },
  { path: "Galeria", titol: "Galeria de fotos", Element: <Galeria /> },
  {
    path: "ToggleButton",
    titol: "Boton que cambia",
    Element: <ToggleButton />,
  },
  { path: "Acordio", titol: "Texte en Acordio", Element: <Acordio /> },
  { path: "Carrusel", titol: "Carrusel de fotos", Element: <Carrusel /> },
  {
    path: "TresEnRalla",
    titol: "Juego Tres en ralla",
    Element: <TresEnRalla />,
  },
  { path: "GroupButton", titol: "Grupo de botones", Element: <GroupButton /> },
  { path: "VectorEj1", titol: "Ejercicio Vectores 1", Element: <VectorEj1 /> },
  { path: "VectorEj2", titol: "Ejercicio Vectores 2", Element: <VectorEj2 /> },
];

export default llista;
