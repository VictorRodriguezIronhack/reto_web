# THE PHONE CAVE

Autor: Jordi Boronat

La app es un CRUD que permite ver todos los teléfonos, editarlos, eliminarlos y añadir nuevos. He trabajado sobretodo con la maquetación para que se quede un resultado lo más estético posible. 

<img src="https://res.cloudinary.com/jordi-ironhack/image/upload/v1610908988/fotos-webuild/Captura_de_pantalla_2021-01-17_a_las_19.38.57_d5e8rz.png" alt="Overview">
<img src="https://res.cloudinary.com/jordi-ironhack/image/upload/v1610908989/fotos-webuild/Captura_de_pantalla_2021-01-17_a_las_19.39.11_ekltya.png" alt="Overview">
<img src="https://res.cloudinary.com/jordi-ironhack/image/upload/v1610908981/fotos-webuild/phone-detail_nfg4al.png" alt="Overview">

### Endpoints Servidor

A pesar que en las instrucciones se especificaba tener un sólo un endpoint, he implementado más para liberar al Cliente de hacer procesos más costosos y que la web tenga procesos más ligeros.

| Ruta        | Método           | Acción  |
  | ------------- | ------------- | ------------- |
  | `/telefonos`  | GET | Acceso a todos los teléfonos |
  | `/new` | POST | Añadir nuevo teléfono |
  | `/telefonos/:id` | GET | Detalles de un teléfono  |
  | `/edit/:id` | POST | Editar teléfono  |
  | `/delete/:id` | POST | Eliminar teléfono  |
  | `/files/upload` | POST | Subir archivo a Cloudinary  |
 
 ### Endpoints Cliente

A pesar que en las instrucciones se especificaba tener un sólo un endpoint, he implementado más para liberar al Cliente de hacer procesos más costosos y que la web tenga procesos más ligeros.

| Ruta        |  Acción  |
  | ------------- | ------------- | 
  | `/`  | Página de inicio |
  | `/telefonos` | Listado teléfonos |
  | `/telefonos/:id` | Detalles de un teléfono  |
  | `/editar/:id` | Editar teléfono  |
  | `/new` | Añadir nuevo teléfono  |



### Tecnologías usadas
- HTML5 
- CSS3
- JavaScript
  - React
  - AJAX
  - NodeJs
  - MondoDB
  - Mongoose
  - Cloudinary
  - Multer
  - React Bootstrap
  - Cors 
