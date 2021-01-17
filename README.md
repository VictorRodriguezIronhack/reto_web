# Web Challenge
## El reto
1. Escribir una aplicación de catalogo de telefonos con los siguientes requisitos:
- Escribir una sencilla API REST en el lenguaje que te resulte más cómodo
- Tenga 1 endpoint `/phones`
- Devuelve la carga adjunta phones.json
- No hay necesidad de una capa de persistencia
2. Escribir una aplicación de React que muestre los telefonos de la API.
- Utilice Redux para la administración del estado y Axios (o una biblioteca similar) para obtener datos de la API REST. (Puedes no usar Redux)
 - Mostrar una lista inicial con todos los teléfonos
 - Cuando se selecciona un modelo de teléfono de la lista, se muestra una vista detallada del teléfono que muestra algunos detalles más sobre el mismo.
 - Mostrar un componente tipo spinner o de marcador de posición mientras la solicitud de la API está en curso.
 - Haz que se vea decente. No hay necesidad de un diseño súper sofisticado, pero como mínimo, hazlo algo sensible para que no se vea terrible en un teléfono móvil. Añade imágenes para cada dispositivo.
3. Envía el código a un repositorio público de github con un README.md que explique cómo ejecutar la API y la aplicación Frontend.

## Solución
1. Crear unos directorios Server(5000) y Client(3000) con sus respectivos puertos locales 
2. Crear server Boilerplate y adaptarlo para las necesidades del proyecto
3. Correr el comando `create-react-app` en cliente
4. Server
- Cambiadas las direcciones URL de las imagenes de los telefonos por URL´s absolutas de Cloudinary.
- Importa el archivo `phones.json` en una base de datos local mediante el siguiente codigo en la terminal:
`mongoimport --db=retoweb --collection=phones --file=phones.json --jsonArray`
- Crear un modelo de phones y endpoints.
- Testear rutas con Postman.
5. Client
- Instalar `react-router-dom`, `axios` y `react-bootstrap`
- Crear servicio Axios para hacer peticiones al servidor. 
- Crear los distintos componentes para la visualización de los telefonos.
6. Puesta en marcha de la SPA:
- Correr el siguiente codigo en la terminal en el directorio server:
`mongoimport --db=retoweb --collection=phones --file=phones.json --jsonArray`
-Utilizar los comandos `npm start` en cliente y `npm run dev` en servidor para correr la aplicacion.

### Autor: Gonzalo Argüelles Navarro


