import Comptador from "./Comptador/Comptador";
import Galeria from "./Galeria/Galeria";
import ToggleButton from "./ToggleButton/ToggleButton";
import Acordio from "./Acordio/Acordio";
import Carrusel from "./Carrusel/Carrusel";
import TresEnRalla from "./TresEnRalla/TresEnRalla";
import VectorEj1 from "./VectorEj1/VectorEj1";
import VectorEj2 from "./VectorEj2/VectorEj2";
import GroupButton from "./GroupButton/GroupButton";
import VectorEj3 from "./VectorEj3/VectorEj3";
import VectorEj5 from "./VectorEj5/VectorEj5";
import VectorEj6 from "./VectorEj6/VectorEj6";
import RelojDigital from "./RelojDigital/RelojDigital";

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
  {
    path: "RelojDigital",
    titol: "Reloj Digital",
    Element: <RelojDigital></RelojDigital>,
  },
  { path: "GroupButton", titol: "Grupo de botones", Element: <GroupButton /> },
  { path: "VectorEj1", titol: "Ejercicio Vectores 1", Element: <VectorEj1 /> },
  { path: "VectorEj2", titol: "Ejercicio Vectores 2", Element: <VectorEj2 /> },
  { path: "VectorEj3", titol: "Ejercicio Vectores 3", Element: <VectorEj3 /> },
  { path: "VectorEj5", titol: "Ejercicio Vectores 5", Element: <VectorEj5 /> },
  { path: "VectorEj6", titol: "Ejercicio Vectores 6", Element: <VectorEj6 /> },
];

export default llista;
