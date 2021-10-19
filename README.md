<div align="center">
<h1>Reto web - The phone cave</h1> 
</div>

# What did we do?
- Created two models, one for users & one for phones (we used a DDBB)
- MERN stack for the whole APP
- Axios conection with the API
- Bootstrap & React bootstrap for design
- Node, mongoose and express as a backend
- React as a frontend
  - Components
  - Hooks
- Deployment using Heroku both client and server
- BBDD with MongoDB Atlas

<details>
  <summary>Test instructions</summary>

# Bienvenid@ al reto de The Phone Cave

En The Phone Cave estamos buscando a esa persona que nos ayude a convertir nuestra tienda cueva en casa y para ello os presentamos este reto.

##### El reto (3 primeras horas)

Tu tarea es escribir una aplicación de catálogo de telefonos. Los requisitos mínimos para que aceptar tu código son los siguientes:

1. Escribir una API REST en el lenguaje que te resulte más cómodo (NodeJS, Rails, Java) que cumpla con lo siguientes objetivos:
 - 1 endpoint `/teléfonos`
 - Devuelve la carga adjunta "phones.json"
 - No hay necesidad de una capa de persistencia (BBDD). 
2. Escribir una aplicación de React que muestre los teléfonos de la API:
 - Utilice Axios (o una biblioteca similar) para obtener datos de la API REST.
 - Mostrar una lista inicial con todos los teléfonos
 - Cuando se selecciona un modelo de teléfono de la lista, se muestra una vista detallada del teléfono que muestra algunos detalles sobre el mismo.
 - Mostrar un componente tipo spinner o de marcador de posición mientras la solicitud de la API está en curso. (simular si no existen tiempos de carga)
 - Haz que se vea decente. No hay necesidad de un diseño súper sofisticado, pero como mínimo, hazlo algo sensible para que no se vea terrible en un teléfono móvil. Añade imágenes para cada dispositivo.
3. Entrega tu resultado vía PR.

##### Los bonus (7 próximos días)
Como habrás podido comprobar esta aplicación es muy sencilla, pero no te vamos a mentir nos gustaria verte desplegar todo tu arsenal de armas, así pues si sabes:

- Typescript
- GraphQL
- Mongo
- Redux
- Hooks
- Styled Components
- Docker
- Eres capaz de subir a producción la página
- ...

Los límites los pones TU:

 - Puedes hacer una API compleja, añadir login, un carrito de la compra...
 - Puedes maquetarlo en exclusiva para movil a modo de app...

Ahora bien, hablemos de el limite de entrega:

- Queremos ver una PR tres horas despues de que haya comenzado el reto. En ella deben de estar los objetivos básicos descritos en el punto El Reto.
- Una vez enviada esa PR tendrás una semana para completar los bonus de la app y convertirla en tu proyecto soñado.


- En el supuesto de que transcurridas las tres horas no tengas los objetivos del MVP listos envia la PR indistintamente. Se trata de un reto de velocidad.
- No se aceptaran PR en el día 7 si no se hizo la PR a las tres horas. Un reto complementa al anterior aunque se evaluen por separado.


Para comenzar con el reto haz fork del repositorio y para entregarlo no olvides hacer PR. Currate un Readme.MD bueno, si no se adjuntan las instrucciones para correr el repo tu candidatura quedará invalidada.
 </details>

## You can play it from -> https://reto-web-phones-cli.herokuapp.com/telefonos
---

## Server
Install all dependencies with
``` npm i ```

### :one: - Dependencies
```
{
    "bcryptjs": "^2.4.3",
    "cloudinary": "^1.27.1",
    "cookie-parser": "^1.4.5",
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "express-jwt": "^6.0.0",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.13.4",
    "morgan": "^1.10.0",
    "multer": "^1.4.3",
    "multer-storage-cloudinary": "^4.0.0"
}
```

### :two: - Scripts
Run the server => node server.js || nodemon server.js </br>
``` npm start ```
``` npm run dev ```

---

## Client
Install all dependencies with
``` npm i ```
### :one: - Dependencies
```
{
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.1",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-rc.0",
    "react-dom": "^17.0.2",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "web-vitals": "^1.0.1"
  }
  ```
### :two: - Scripts
Run the client => react-scripts start </br>
``` npm start ```