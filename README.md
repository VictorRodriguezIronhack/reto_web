# Reto de The Phone Cave

Las nuevas técnologías estan llegando a los lugares mas reconditos del planeta, y con la misión de ofrecer los mejores telefonos al mejor precio del mercado, nace The Phone Cave.

<img src="https://futurechallenges.org/wp-content/uploads/2013/12/Container_Shop_in_Joe_Slovo_Park.jpg" alt="drawing" width="500"/>

La resolución del reto diseñado para el puesto de Javascript Developer. 

### El reto

Escribir una aplicación de catálogo de telefonos muy simple (o no).
1. Escribir una sencilla API REST en el lenguaje que te resulte más cómodo (NodeJS, Rails, Java) que...
 - Tenga 1 endpoint `/teléfonos`
 - Devuelve la carga adjunta "phones.json"
 - No hay necesidad de una capa de persistencia (BBDD). 
2. Escribir una aplicación de React que muestre los teléfonos de la API.
 - Utilice Redux para la administración del estado y Axios (o una biblioteca similar) para obtener datos de la API REST. (Puedes no usar Redux)
 - Mostrar una lista inicial con todos los teléfonos
 - Cuando se selecciona un modelo de teléfono de la lista, se muestra una vista detallada del teléfono que muestra algunos detalles más sobre el mismo.
 - Mostrar un componente tipo spinner o de marcador de posición mientras la solicitud de la API está en curso.
 - Haz que se vea decente. No hay necesidad de un diseño súper sofisticado, pero como mínimo, hazlo algo sensible para que no se vea terrible en un teléfono móvil. Añade imágenes para cada dispositivo.
3. Envía el código a un repositorio público de github con un README.md que explique cómo ejecutar la API y la aplicación Frontend.

### Visualizar la solución

1. Crea en `/back` un archivo `.env` con la siguiente información:
    `PORT=5000
    DB_LOCAL=mongodb://localhost/reto-web
    DOMAIN_LOCAL=http://localhost:3000`
2. Abre la terminal y accede al directorio `original-content`
3. Ejecuta el comando `mongoimport --db=retoweb --collection=phones --file=phones.json --jsonArray` para crear la base de datos local con la información de los teléfonos.
4. Divide verticalmente tu consola, vas a trabajar en dos directorios a la vez.
5. En una de las ventanas de consola accede a `/back`. Dentro ejecuta el comando `npm i` para instalar todos las dependencias necesarias.
7. Una vez finalizada la instalación, ejecuta el comando `npm run dev` para levantar el servidor de manera local.
8. En la otra ventana de la consola accede a `/front`. Dentro ejecuta el comando `npm i` para instalar todos las dependencias necesarias.
9. Una vez finalizada la instalación, ejecuta el comando `npm start` para abrir la SPA en el navegador.