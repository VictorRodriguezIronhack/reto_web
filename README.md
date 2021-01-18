# Bienvenid@ a la web The Phone Cave

En **The Phone Cave** podrás encontrar los últimos modelos del mercado así como las mejores reliquias del pasado, las mejores marcas y todo al mejor precio.

Porque no hay nada mejor que un móvil de la prehistoria en para vivir en la cueva más paradisíaca, encontrarás los mejores modelos del pasado, incluso los que están grabados en piedra.

<img src='https://res.cloudinary.com/jorgemaram/image/upload/v1610922770/Phone%20cave/BWEC5G_ptvsm7.jpg' alt='painting' height='450'>

## Tabla de endpoints en servidor

| Id | Método | Ruta | Descripción |
| ------ | ------ | ------ | ------ |
| 1 | post | /api/auth/signup | Envía la información de un nuevo usuario a la base de datos y se registra dicho usuario |
| 2 | get | /api/auth/loggedIn | Muestra registro de usuario |
| 3 | post | /api/auth/login | Permite a un usuario iniciar sesión |
| 4 | post | /api/auth/logout | Permite a un usuario finalizar sesión |
| 5 | get | /api/phones/getAllPhones | Muestra los diferentes teléfonos de la base de datos |
| 6 | get | /api/phones/getOnePhone/:phone_id | Muestra los detalles de un teléfono |
| 7 | post | /api/phones/newPhone | Envía la información de un teléfono nuevo a la base de datos |
| 8 | put | /api/phones/editPhone/:phone_id | Envía el formulario de edición del teléfono a la base de datos |
| 9 | delete | /api/phones/deletePhone/:phone_id | Borra un teléfono de la base de datos |
| 10 | get | /api/user/getAllUser | Muestra los diferentes usuarios de la base de datos |
| 11 | get | /api/user/getOneUser/:user_id | Muestra los detalles de un usuario |
| 12 | delete | /api/user/deleteUser/:user_id | Borra los detalles de un usuario de la base de datos |
| 13 | post | /api/files/upload | Permite cargar la imagen a través de Cloudinary de los archivos subidos para los registros |

## Tabla de rutas de acceso cliente

| Id | Ruta | Información vista |
| ------ | ------ | ------ |
| 1 | / | Muestra la home principal de la web |
| 2 | /registro | Vista con el formulario de alta de nuevos usuarios |
| 3 | /acceso-usuario | Vista con formulario para inicio de sesión |
| 4 | /teléfonos | Vista de la lista de todos los teléfonos de la base de datos |
| 5 | /teléfonos/crear | Muestra formulario de alta de un nuevo teléfono |
| 6 | /teléfonos/editar/:phone_id | Muestra formulario de edición para un teléfono existente |
| 7 | /teléfonos/:phone_id | Muestra vista de los detalles de un teléfono |

### Instrucciones
En primer lugar, realiza `fork` y `clone` sobre este repositorio.

#### Cliente
- Acceder a la carpeta `client` del repositorio y desde ahí en la terminar ejecutar los siguientes comandos:

```bash
$ npm install
$ npm start

```
Una vez esté realizado, se ejecutará el cliente en el `puerto 3000` mediante <http://localhost:3000/> .

#### Servidor
- Acceder a la carpeta `server` del repositorio y desde ahí en la terminar ejecutar los siguientes comandos:

```bash
$ npm install
$ npm run dev

```
Una vez esté realizado, se conectará con la base de datos de Mongo Atlas. En cualquier caso, está el archivo `.json` con los teléfonos dentro del repositorio.

### Manejo de la web

- Acceder en la página <https://the-phone-cave.herokuapp.com/> .
- Algunas de las rutas están protegidas. En caso de que necesites acceder a las mismas puedes hacer inicio de sesión con el usuario `Admin` y la contraseña `admin1234` .

##### Tecnologías empleadas

- HTML5
- CSS
- JavaScript
- React
- MongoDB
- Passport
- Cloudinary
- AXIOS
- React Bootstrap
