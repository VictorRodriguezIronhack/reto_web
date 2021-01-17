# Reto de The Phone Cave

Las nuevas técnologías estan llegando a los lugares mas reconditos del planeta, y con la misión de ofrecer los mejores telefonos al mejor precio del mercado, nace The Phone Cave.

<img src="https://futurechallenges.org/wp-content/uploads/2013/12/Container_Shop_in_Joe_Slovo_Park.jpg" alt="drawing" width="500"/>

La resolución del reto diseñado para el puesto de Javascript Developer. 

##### El reto

Escribir una aplicación de catálogo de telefonos muy simple (o no).

#### Visualizar la solución

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