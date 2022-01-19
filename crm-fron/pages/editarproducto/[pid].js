import React from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import { gql, useQuery, useMutation } from "@apollo/client";
import { Formik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

const OBTENER_PRODUCTO = gql`
  query obtenerProducto($id: ID!) {
    obtenerProducto(id: $id) {
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

const ACTUALIZAR_PRODUCTO = gql`
  mutation actualizarProducto($id: ID!, $input: ProductoInput) {
    actualizarProducto(id: $id, input: $input) {
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

const EditarProducto = () => {
  const router = useRouter();
  const {
    query: { pid },
  } = router;

  // Consultar para obtener el producto
  const { data, loading, error } = useQuery(OBTENER_PRODUCTO, {
    variables: {
      id: pid,
    },
  });

  // Mutation para modificar el producto
  const [actualizarProducto] = useMutation(ACTUALIZAR_PRODUCTO);

  // Schema de validación
  const schemaValidacion = Yup.object({
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
  });

  if (loading) return "Cargando...";

  if (!data) {
    return "Acción no permitida";
  }

  const actualizarInfoProducto = async (valores) => {
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

    try {
      const { data } = await actualizarProducto({
        variables: {
          id: pid,
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
      console.log("response on eddit :", data);

      // Redirgir hacia productos
      router.push("/");

      // Mostrar una alerta
      Swal.fire("Correcto", "El producto se actualizó correctamente", "success");
    } catch (error) {
      console.log(error);
    }
  };

  const { obtenerProducto } = data;

  return (
    <>
      <h1 className="text-2xl text-gray-800 font-light">Editar Producto</h1>

      <div className="flex justify-center mt-5">
        <div className="w-full max-w-lg">
          <Formik
            enableReinitialize
            initialValues={obtenerProducto}
            validationSchema={schemaValidacion}
            onSubmit={(valores) => {
              actualizarInfoProducto(valores);
            }}>
            {(props) => {
              return (
                <form
                  className="bg-white shadow-md px-8 pt-6 pb-8 mb-4"
                  onSubmit={props.handleSubmit}>
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
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.name}
                    />
                  </div>

                  {props.touched.name && props.errors.name ? (
                    <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                      <p className="font-bold">Error</p>
                      <p>{props.errors.name}</p>
                    </div>
                  ) : null}

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="manufacturer">
                      Manufacturer
                    </label>

                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="manufacturer"
                      type="text"
                      placeholder="manufacturer"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.manufacturer}
                    />
                  </div>

                  {props.touched.manufacturer && props.errors.manufacturer ? (
                    <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                      <p className="font-bold">Error</p>
                      <p>{props.errors.manufacturer}</p>
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
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.description}
                    />
                  </div>

                  {props.touched.description && props.errors.description ? (
                    <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                      <p className="font-bold">Error</p>
                      <p>{props.errors.description}</p>
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
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.color}
                    />
                  </div>

                  {props.touched.color && props.errors.color ? (
                    <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                      <p className="font-bold">Error</p>
                      <p>{props.errors.color}</p>
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
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.price}
                    />
                  </div>

                  {props.touched.price && props.errors.price ? (
                    <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                      <p className="font-bold">Error</p>
                      <p>{props.errors.price}</p>
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
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.imageFileName}
                    />
                  </div>

                  {props.touched.imageFileName && props.errors.imageFileName ? (
                    <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                      <p className="font-bold">Error</p>
                      <p>{props.errors.imageFileName}</p>
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
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.screen}
                    />
                  </div>

                  {props.touched.screen && props.errors.screen ? (
                    <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                      <p className="font-bold">Error</p>
                      <p>{props.errors.screen}</p>
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
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.processor}
                    />
                  </div>

                  {props.touched.processor && props.errors.processor ? (
                    <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                      <p className="font-bold">Error</p>
                      <p>{props.errors.processor}</p>
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
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.ram}
                    />
                  </div>

                  {props.touched.ram && props.errors.ram ? (
                    <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                      <p className="font-bold">Error</p>
                      <p>{props.errors.ram}</p>
                    </div>
                  ) : null}

                  <input
                    type="submit"
                    className="bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900"
                    value="Guardar Cambios"
                  />
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default EditarProducto;
