# Bienvenid@ al reto de The Phone Cave

Las nuevas técnologías estan llegando a los lugares mas reconditos del planeta, y con la misión de ofrecer los mejores telefonos al mejor precio del mercado, nace The Phone Cave.

<img src="https://futurechallenges.org/wp-content/uploads/2013/12/Container_Shop_in_Joe_Slovo_Park.jpg" alt="drawing" width="500"/>

En el día de hoy hemos venido a presentarte el reto que hemos diseñado para el puesto de Javascript Developer. 

##### El reto

Tu tarea es escribir una aplicación de catálogo de telefonos muy simple (o no). Los requisitos mínimos para que leamos tu código son los siguientes:

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

##### Los bonus
Como abras podido comprobar ya te hemos empezado a exigir Redux, pero no te vamos a mentir nos gustaria verte desplegar todo tu arsenal de armas, así pues si sabes:

- Typescript
- GraphQL
- Mongo
- Redux
- Hooks
- Styled Components
- Docker
- Eres capaz de subir a producción la página

Los límites los pones TU, demuestra el motivo de que acabemos eligiendote para el puesto.

 - Puedes hacer una API compleja, añadir login, un carrito de la compra...
 - Puedes maquetarlo en exclusiva para movil a modo de app...

Ahora bien, el limite de entrega es el Lunes a las 10:00 am.  


Para comenzar con el reto haz fork del repositorio y para entregarlo no olvides hacer PR. Currate un Readme.MD bueno si no se adjuntan las instrucciones para correr el repo tu candidatura quedará invalidada.

## Resuelto 

Intsrucciones para correr la aplicación:

1. Una vez clonada la repo, dividir la terminal en dos ventanas. En una posicionarse en la carpeta server y, en la otra, en la carpeta client.

2. En la carpeta 'server', crear un archivo .env con el siguiente contenido:

    DOMAIN_LOCAL=http://localhost:3000

    DB_LOCAL=mongodb://localhost/phones
    
    PORT=5000

3. Sembrar el seed para crear la base datos con el contenido del archivo phones.json en MongoDB. Para ello escribir en la terminal lo siguiente, en la carpeta server:
node bin/seed.js

4. A continuación, en el directorio client, correr 'npm i' en la terminal para instalar las dependencias. 

5. Una vez finalizados estos preparativos, correr con la terminal en la carpeta server: npm run start. En la carpeta client correr: npm run dev.

6. Debería haberse abierto la aplicación en google Chrome (si es tu navegador por defecto). En caso contrario, abrir Chrome y escribir la siguiente dirección:
http://localhost:3000/

### Desarrollador: Daniel Reina Ramos



