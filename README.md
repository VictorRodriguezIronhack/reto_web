# The Phone Cave Challenge

The challenge consisted in obtaining a web application for a telephone sales company from a <code>.json</code> file that containes the information of it's products.

I developed an API REST application made up of a <code>/client</code> side, where habilities with both ReactJS and CSS are demonstrated, and a <code>/server</code> side, where ExpressJS was used to obtain the data from the <code>.json</code> file to send to front.

To run the application you will have to run both sides simultaneously in the terminal:

## Server setup
- In the terminal go to <code>/server</code> and run <code>npm i</code> to install the dependancies.
- Create a file <code>.env</code> in the root directory of <code>/server</code> with the port (<code>PORT=5000</code>) and the local domain (<code>DOMAIN_LOCAL=htpp://localhost:3000</code>).
- Run <code>npm run dev</code> in the terminal. Your server side should be up and running.

## Client setup
- In the terminal go to <code>/client</code> and run <code>npm i</code> to install the dependancies.
- One that has finished, run <code>npm start</code>.
- This should automatically open http:localhost:3000 in your browser to visualize it.

                              --------------------------------------------------------------

# Reto de The Phone Cave

El reto consistia en obtener una aplicacion web de una tienda de telefonia movil a partir de un documento <code>.json</code> que contiene la informacion de los productos.

He desarrollado una aplicacion API REST compuesta por una parte <code>/client</code>, en la que se demuestran habilidades con ReactJS y CSS, y otra parte <code>/server</code>, en la que, a traves de ExpressJS, se obtienen datos de un documento <code>.json</code> para poder devolver datos al front.

Para poder correr la applicacion tendras que ejecutar de forma simultanea en la terminal ambas partes:

## Ejecutar servidor

- En la terminal en <code>/server</code> ejecuta <code>npm i</code> para instalar las dependencias. 
- Crea un archivo <code>.env</code> dentro del archivo raiz <code>/server</code> con el puerto (<code>PORT=5000</code>) y el dominio local (<code>DOMAIN_LOCAL=htpp://localhost:3000</code>).
- Ejecuta en la terminal <code>npm run dev</code>. Tu servidor deberia estar corriendo sin problemas.

## Ejecutar cliente

- En la terminal en <code>/client</code> ejecuta <code>npm i</code> para instalar las dependencias 
- Una vez que haya acabado ejecuta <code>npm start</code>.
- Esto deberia automaticamente abrirte http:localhost:3000 en el navegador para visualizarlo.
