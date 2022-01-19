import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/actions";

function Pedidos() {
  const cart = useSelector((state) => state.cart);
  const total = useSelector((state) => state.total);
  console.log("---cart---:", cart);
  const dispatch = useDispatch();
  const handleAdd = (id) => {
    dispatch(actions.ADD_TO_CART({ id }));
  };
  const handleRemove = (id) => {
    console.log('---removing---:',id)
    dispatch(actions.REMOVE_FROM_CART({ id }));
  };
  return (
    <>
    <table className="table-auto shadow-md mt-10 w-full w-lg bg-blue-200">
      <thead className="bg-blue-600 ">
        <tr className="text-white">
          <th className="w-1/5 py-2">Nombre</th>
          <th className="w-1/5 py-2">Manufacture</th>
          <th className="w-1/5 py-2">precio</th>
          <th className="w-1/5 py-2">cantidad</th>
          <th className="w-1/5 py-2"></th>
        </tr>
      </thead>
      <tbody>
        {cart.map((pedido) => (
          <tr key={pedido.id} className="text-center">
            <td className="py-2">{pedido.name}</td>
            <td className="py-2">{pedido.manufacturer}</td>
            <td className="py-2">{pedido.price}</td>
            <td className="py-2">{pedido.quantity}</td>
            <td className="py-2">
              <button
                onClick={handleAdd.bind(this,pedido.id)}
                className="bg-green-500 mr-5 w-full sm:w-auto font-bold uppercase text-xs rounded py-1 px-2 text-white shadow-md">
                Añadir
              </button>
              <button
                onClick={handleRemove.bind(this, pedido.id)}
                className="bg-red-500 w-full sm:w-auto font-bold uppercase text-xs rounded py-1 px-2 text-white shadow-md">
                Reducir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <h4 className="text-last pr-5 font-bold  pt-5">total : {total}  moviles</h4>
    </>
  );
}

export default Pedidos;
