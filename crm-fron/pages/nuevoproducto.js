import React from "react";
import Layout from "../components/Layout";
import { useFormik } from "formik";
import * as Yup from "yup";
import { gql, useMutation } from "@apollo/client";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

const NUEVO_PRODUCTO = gql`
  mutation nuevoProducto($input: ProductoInput) {
    nuevoProducto(input: $input) {
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

const NuevoProducto = () => {
  // routing
  const router = useRouter();

  // Mutation de apollo
  const [nuevoProducto] = useMutation(NUEVO_PRODUCTO, {
    update(cache, { data: { nuevoProducto } }) {
      // obtener el objeto de cache
      const { obtenerProductos } = cache.readQuery({
        query: OBTENER_PRODUCTOS,
      });

      // reescribir ese objeto
      cache.writeQuery({
        query: OBTENER_PRODUCTOS,
        data: {
          obtenerProductos: [...obtenerProductos, nuevoProducto],
        },
      });
    },
  });

  // Formulario para nuevos productos
  const formik = useFormik({
    initialValues: {
      name: "",
      manufacturer: "",
      description: "",
      color: "",
      price: "",
      imageFileName: "",
      screen: "",
      processor: "",
      ram: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("El Campo es obligatorio"),
      manufacturer: Yup.string().required("El Campo es obligatorio"),
      description: Yup.string().required("El Campo es obligatorio"),
      color: Yup.string().required("El Campo es obligatorio"),
      price: Yup.number()
        .required("El Campo es obligatorio")
        .positive("No se aceptan números negativos"),
      imageFileName: Yup.string().required("El Campo es obligatorio"),
      screen: Yup.string().required("El Campo es obligatorio"),
      processor: Yup.string().required("El Campo es obligatorio"),
      ram: Yup.number()
        .required("El Campo es obligatorio")
        .positive("No se aceptan números negativos"),
    }),
    onSubmit: async (valores) => {
      const {
        name,
        manufacturer,
        description,
        color,
        price,
        imageFileName,
        screen,
        processor,
        ram,
      } = valores;
      console.log("---valores---:", valores);
      try {
        const { data } = await nuevoProducto({
          variables: {
            input: {
              name,
              manufacturer,
              description,
              color,
              price,
              imageFileName,
              screen,
              processor,
              ram,
            },
          },
        });

         console.log("data response :",data);

        // Mostrar una alerta
        Swal.fire("Creado", "Se creó el producto correctamente", "success");

        // Redireccionar hacia los productos
        router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
   <>
      <h1 className="text-2xl text-gray-800 font-light">Crear Nuevo Producto</h1>

      <div className="flex justify-center mt-5">
        <div className="w-full max-w-lg">
          <form
            className="bg-white shadow-md px-8 pt-6 pb-8 mb-4"
            onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="nombre">
                Name
              </label>

              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Name Product"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
            </div>

            {formik.touched.name && formik.errors.name ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p>{formik.errors.name}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="existencia">
                Manufacturer
              </label>

              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="manufacturer"
                type="text"
                placeholder="manufacturer"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.manufacturer}
              />
            </div>

            {formik.touched.manufacturer && formik.errors.manufacturer ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p>{formik.errors.manufacturer}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="existencia">
                Description
              </label>

              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                type="text"
                placeholder="Description"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
              />
            </div>

            {formik.touched.description && formik.errors.description ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p>{formik.errors.description}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="existencia">
                Color
              </label>

              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="color"
                type="text"
                placeholder="Color"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.color}
              />
            </div>

            {formik.touched.color && formik.errors.color ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p>{formik.errors.color}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="existencia">
                Price
              </label>

              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="price"
                type="number"
                placeholder="price"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.price}
              />
            </div>

            {formik.touched.price && formik.errors.price ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p>{formik.errors.price}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="existencia">
                Image File Name
              </label>

              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="imageFileName"
                type="text"
                placeholder="Image File Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.imageFileName}
              />
            </div>

            {formik.touched.imageFileName && formik.errors.imageFileName ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p>{formik.errors.imageFileName}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="precio">
                Screen
              </label>

              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="screen"
                type="text"
                placeholder="Screen"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.screen}
              />
            </div>

            {formik.touched.screen && formik.errors.screen ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p>{formik.errors.screen}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="precio">
                processor
              </label>

              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="processor"
                type="text"
                placeholder="processor"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.processor}
              />
            </div>

            {formik.touched.processor && formik.errors.processor ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p>{formik.errors.processor}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="precio">
                ram
              </label>

              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="ram"
                type="number"
                placeholder="ram"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.ram}
              />
            </div>

            {formik.touched.ram && formik.errors.ram ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p>{formik.errors.ram}</p>
              </div>
            ) : null}

            <input
              type="submit"
              className="bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900"
              value="Agregar Nuevo Producto"
            />
          </form>
        </div>
      </div>
      </>
  );
};

export default NuevoProducto;
