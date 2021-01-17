# Tech Challenge Ironhack - The Phone Cave

Aplicación web desarrollada para el reto propuesto por Ironhack en la Career Week del Bootcamp. 

##### El objetivo

Desarrollar una aplicación web con los siguientes requísitos mínimos:

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

##### Ejecución

Para ejecutar la aplicación descarga todo el repositorio a tu dispositivo. Haz npm install en cada una de las carpetas para instalar los paquetes necesarios. Importante que lo hagas moviendo el terminal a cada una de las carpetas. Una vez hecho esto, en la carpeta back_phonecave debes crearte un documento .env que contenga la variable PORT asignándole el puerto que desees utilizar y la variable ENV con el valor development. Luego desde la ruta del proyecto back_phonecave ejecuta "npm run dev". Una vez hecho esto, mueve la terminal a la ruta front_phonecave y ejecuta el comando "npm start". Esto lanzará directamente tu aplicación al navegador.
