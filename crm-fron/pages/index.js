
import {useSelector}  from 'react-redux';
import Producto from "../components/Producto";
import { gql, useQuery } from "@apollo/client";
import classes from "../styles/Home.module.css";

import Link from "next/link";

const OBTENER_PRODUCTOS = gql`
  query obtenerProductos {
    obtenerProductos {
      id
      name
      manufacturer
      description
      color
      price
      imageFileName
      screen
      processor
      ram
    }
  }
`;

const Index = () => {
 const totalCart = useSelector(state=> state.total);
  // Consultar los productos
  const { data, loading, error } = useQuery(OBTENER_PRODUCTOS);


  if (loading) return "cargando...";

  return (
    <>
      <h1 className="text-2xl text-gray-800 font-light">Productos</h1>
      <div className="flex justify-around">
        <Link href="/nuevoproducto">
          <a className="bg-blue-800 py-2 px-5 mt-3 inline-block text-white hover:bg-gray-800 hover:text-gray-200 mb-3 rounded uppercase font-bold text-sm">
            Nuevo Producto
          </a>
        </Link>
        <div data-count={totalCart} className={`self-center ${classes.carrito}`}><Link href="/pedidos">
         <a> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAEcElEQVR4nO2aT2wbRRTGvzfrtNCKQykRKAH1j+1WAqkttSu1gkPVC+LCsRJHhBQntD0i0Ztv5IrUf6loi4TEgYgrKIIrFBrbOUWFxkkELm0lkqAWqQXXO48DTrozdhLvzOxuaPZ3m7c7n8ef3nueHS+QkpKymSE9ULw0w+vMeQjmaQIu7N6Z/3z8JPkRrS0WhMGcbSA6wkTX5pfqPx77dPp556uKERMDghQft7ZMvPbl9BYnq0kAWwMAoPjs4tYhBzqJ0NED1uPYxV8GWySuMPDWSpDxQ2Uk/4bJAvSeUxnOh16TDaEz4PrI/t99n04rQaI9zlYUM0YlkO3PzgNoPYnwi//XPmBkQPun725Q57lFMeBmSfFi0wRvBwdNFq9YriURjA1goBEck0ebywDBqgHgTWYAC7UEiPCy/XLiJ2M8U3IDFPjJZnTNgB6eLULdv94+QZ/PhJPVUn58tfufrgxg7mZOba0pxgbIptR6QPcMiJPDF2azwTEBf1aHcnNrzTE2YGpx/z0AzeUxA/3Hr80/Y6rnAs9DIThmcA1Ea5aUeQ8ok8TYzF0wdrUj9FezNQhgNnhb2Jq1eRZgqAaARHW9OXZPg8xKGYiE+wCBFQNIcsQGkNoIIRPsA8zEwKFgSApEnQGioUUSM6DdAFdOp3ppgIClAUxSyQCJ5ErApAEClgZ4Us0ASjADTBogYN0DaMOUgEkDBGxLwBe3tVAyJWDYAAGDM0H9g4tj9UcAtq6EaPv2amngoZVuSApjM1li1AOh+5VSbkfkPaD9AXeCoQw/GrTSNEBItf4JqPby5QE3x+JKH3jMHHsfYEHaLwD1lP6AAwP0k6EkdoPEXFTG6K3+AQcGCO1sMPanwi4N0PdjNIBJOxoT8RpQuFzfi8AOEMD92gfZ2dXu17HvAdyRATGXAL2pBXraAS5j/jjchgkN5eNIxpMBZRZHBuYKUnI5GCbQ92FkrA2QfWh4zUCA6UDYc0Az6mDZsZGRvi+/CKNiXQJT7+UWAPxtq+MEwie1U/tuhpli3wOIuONcIAkIV/fsyH0Ydpp1CQBYboQ5J1rhWABwXTLO14bzExUDATcGEBoIVD0RlSZLuctOtCPGxVYYkNpeQG6A/wh6xIkBTOrhKAt+1YVuHLjJAMKUMma8U7x0693CWKXPiX6EuHkfp8yi8FL9ZwLyTvRCYPtOkZsMKJNkxhkA0olejLgxAEBtJD9BzO8D+MeVZhw4MwAAJkf2fcYkDwG4gv8ek2PYEtsRyTt5r5+b2+X1tUbB9DYAJsbXkPTR5KmcfoocWo8ACcY3NnpBnBtw9OLN3S3KVADs1C4t+C2vOHV6769O9Bh/sBDFain7m816nZYAALQoM4rOLw8AL3gZ+bEzPUI/MY+GX6GKcwMAHF/9Ep/YAHoKURiwbY1rJi9QuNZTiMAA+nb1S/gueT0V5wYIQWcBLHW5tOSxOJu0Xoe+rYDOjaHsLc/DQQLGATwA8ACErzyIoz8NZ2eS1ktJSUlJSUlJWeZfs1B6y2JznUYAAAAASUVORK5CYII="></img></a></Link>
        </div>
      </div>
      <div className={`flex flex-wrap justify-center ${classes.phones}`}>
        {data?.obtenerProductos.map((producto) => (
          <Producto key={producto.id} producto={producto} />
        ))}
      </div>
    </>
  );
};

export default Index;
