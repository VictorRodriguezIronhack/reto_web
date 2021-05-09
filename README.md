# The Phone Cave

En este reto se ha realizado una app para movil con un catálogo de teléfonos, en la que se ha implementado una barra de navegación con la opción de registrarse y de iniciar sesión.

![image](https://user-images.githubusercontent.com/69985189/117585067-b63d5d00-b110-11eb-9db2-de98d0bfb9ae.png)

1-En la aplicación no es necesario registrarse para acceder al contenido. En la home se obtiene un listado de los productos, y los botones para acceder al registro y al inicio de sesión.
  En cada elemento de producto tenemos la opción para acceder a la información mas detallada del producto, o añadirlo al carrito.
  Solo se puede añadir al carrito si se está registrado.
  El componente carrito no se ha finalizado, con lo que se puede acceder a la pagina 'carrito de la compra', pero no funciona.
  
![image](https://user-images.githubusercontent.com/69985189/117585103-e38a0b00-b110-11eb-955b-417b286b968d.png)
![image](https://user-images.githubusercontent.com/69985189/117585136-09171480-b111-11eb-81c6-026ff108d854.png)


2-Se ha utilizado Axios para obtener datos de la API REST.
3-También se ha implementado un componente spinner, con un setTimeout para simular la carga de la información desde la bd.

4-Para iniciar el proyecto en tu servidor local, primero clona el proyecto desde Github. Luego, accede a la carpeta api y ejecuta los comandos:
    -npm install
    -npm run seeds
    -npm run dev
5-Para iniciar el front end, accede a la carpeta web y ejecuta:
    -npm install
    -npm start
    
    Y ya tendrás la app en tu servidor local
    
6-De los bonus se han usado:
- Mongo
- Hooks
- Styled Components


Espero que os haya gustado mi primera app para movil ;)
