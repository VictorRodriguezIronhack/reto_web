# Bienvenid@ al reto de The Phone Cave

Las nuevas técnologías estan llegando a los lugares mas reconditos del planeta, y con la misión de ofrecer los mejores telefonos al mejor precio del mercado, nace The Phone Cave.

<img src="https://futurechallenges.org/wp-content/uploads/2013/12/Container_Shop_in_Joe_Slovo_Park.jpg" alt="drawing" width="500"/>

En el día de hoy hemos venido a presentarte el reto que hemos diseñado para el puesto de Javascript Developer. 

##### El reto

Escribir una aplicación de catálogo de telefonos muy simple (o no). Los requisitos mínimos para que leamos tu código son los siguientes:

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

##### Solución



1. Creation of a REST API with Express.js and Node.js 


## Here's the route we will be using:

|   Route   | HTTP Verb |   Description   |
|-----------|-----------|-----------------|
| `/api/phones/getAllPhones` |    GET   | json with phones list |
| `/api/phones/getOnePhone/:phone_id` |    GET   | json with one phone |

##### Instructions

# Express generator

Boilerplate for a basic ExpressJS backend

## Install

- Run `npm i` on the root directory

## Run

- Create a `.env` file on the server directory to populate the database ( DB_LOCAL=mongodb://localhost/phones ) and port ( PORT=5000 )
- Run `npm run dev` command on the server directory
