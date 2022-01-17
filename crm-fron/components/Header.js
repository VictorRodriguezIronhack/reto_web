import React from "react";
import Image from "next/image";
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";



const OBTENER_USUARIO = gql`
  query obtenerUsuario {
    obtenerUsuario {
      id
      nombre
      apellido
    }
  }
`;

const Header = () => {
  const router = useRouter();
   // query de apollo
  const { data, loading, error } = useQuery(OBTENER_USUARIO);

  if (loading) return null;

  if (!data.obtenerUsuario) {
    return router.push("/error", "./login");
  }
  const { nombre, apellido } = data.obtenerUsuario;
  const cerrarSesion = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <>
      <div className="sm:flex sm:justify-around mb-6">
        <div className="flex gap-5 items-center">
          <Image
            src="/img/pngwing.com.png"
            width="100"
            height="100"
            alt="ironhack logo"
          />
          <h1 className="text-4xl font-bold italic ironhack"> Reto Web curos oct 2020</h1>
        </div>
          <div className=" flex flex-col ">
          <p className="mx-auto font-bold lg:mb-0 pb-3 ">
            {nombre} {apellido}
          </p>
          <button
            onClick={() => cerrarSesion()}
            type="button"
            className="bg-blue-800 w-full sm:w-auto font-bold uppercase text-xs rounded py-1 px-2 text-white shadow-md">
            Cerrar Sesión
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
