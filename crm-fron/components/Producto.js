import React from "react";
import { useDispatch } from "react-redux";
import * as actions from "../store/actions";
import Swal from "sweetalert2";
import { gql, useMutation } from "@apollo/client";
import Router from "next/router";

import classes from "../styles/Home.module.css";

const ELIMINAR_PRODUCTO = gql`
  mutation eliminarProducto($id: ID!) {
    eliminarProducto(id: $id)
  }
`;

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
const ADD_PEDIDO = gql`
mutation NuevoPedido($input: PedidoInput) {
  nuevoPedido(input: $input) {
    id
    producto
    quantity
    user
  }
}
`;

const Producto = ({ producto }) => {
  const dispatch = useDispatch();
  const {
    id,
    name,
    manufacturer,
    description,
    color,
    price,
    imageFileName,
    screen,
    processor,
    ram,
  } = producto;

  // Mutation para eliminar productos
  const [eliminarProducto] = useMutation(ELIMINAR_PRODUCTO, {
    update(cache) {
      const { obtenerProductos } = cache.readQuery({
        query: OBTENER_PRODUCTOS,
      });

      cache.writeQuery({
        query: OBTENER_PRODUCTOS,
        data: {
          obtenerProductos: obtenerProductos.filter(
            (productoActual) => productoActual.id !== id
          ),
        },
      });
    },
  });

  const confirmarEliminarProducto = () => {
    Swal.fire({
      title: "¿Deseas eliminar a este producto?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar",
      cancelButtonText: "No, Cancelar",
    }).then(async (result) => {
      if (result.value) {
        try {
          // eliminar producto de la bd
          const { data } = await eliminarProducto({
            variables: {
              id,
            },
          });

          // console.log(data);

          Swal.fire("Correcto", data.eliminarProducto, "success");
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  const editarProducto = () => {
    Router.push({
      pathname: "/editarproducto/[id]",
      query: { id },
    });
  };
  const addTocart = () => {

     dispatch(actions.ADD_TO_CART({id, name,price,manufacturer}));
  };
  return (
    <div className="m-5 p-5 flex flex-col max-w-lg mt-4 rounded overflow-hidden shadow-lg mr-2 bg-gray-400">
      <div className="flex justify-center w-64 h-64 my-4 rounded overflow-hidden shadow-lg m-auto">
        <img className="w-full h-full" src={imageFileName} />
      </div>

      <div className={`px-6" py-4 ${classes.info}`}>
        <h2 className="font-bold text-xl mb-2">{name}</h2>
        <p className="text-gray-700 text-base">{description}</p>
        <p className="text-gray-700 text-base">Color :{color}</p>
        <p className="text-gray-700 text-base">Screen : {screen}</p>
        <p className="text-gray-700 text-base">{price} €</p>
      </div>

      <div className="px-6 pt-4 pb-2 ">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          RAM : {ram}MB
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          CPU : {processor}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {manufacturer}
        </span>
        <button
          type="button"
          className=" mt-3 flex justify-center items-center bg-green-600 py-2 px-4 w-full text-white rounded text-xs uppercase font-bold"
          onClick={addTocart}>
          Añadir al carrito
          <img
            className="w-4 h-4 ml-2"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAvElEQVQ4jc2SMYpCMRRFT0RBBtyBVvY2goVLmV24Hldhp4uwE7Wy0Zl6SrE5Nj8avvk/CBZzqscjOfe9EPgEPjmp43fudgBCBbACvuvyoiDhAAzfniDhAoxickyv1X31pvYBujXBOQqqlVCNdcUE2IUQrrkJHoIWpsA2u0II4Q/oqIOkl6a3Cyp+aHhItQfMS4IzsDcDcAWOqSCXslQXjQdKqDP1NzdB6VOlko26LvXg9R9EvoB6Wq73D7gD9TWSOnn8uRAAAAAASUVORK5CYII="></img>
        </button>
        <button
          type="button"
          className=" mt-3 flex justify-center items-center bg-green-600 py-2 px-4 w-full text-white rounded text-xs uppercase font-bold"
          onClick={() => editarProducto()}>
          Editar
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-4 h-4 ml-2">
            <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
          </svg>
        </button>
        <button
          type="button"
          className=" mt-3 flex justify-center items-center bg-red-800 py-2 px-4 w-full text-white rounded text-xs uppercase font-bold"
          onClick={() => confirmarEliminarProducto()}>
          Eliminar
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-4 h-4 ml-2">
            <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Producto;
