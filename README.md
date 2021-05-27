# Bienvenid@ al reto de The Phone Cave

Las nuevas técnologías estan llegando a los lugares mas reconditos del planeta, y con la misión de ofrecer los mejores telefonos al mejor precio del mercado, nace The Phone Cave. El nombre y el tema es una broma pero lo que viene después tomemoslo en serio.

<img src="https://futurechallenges.org/wp-content/uploads/2013/12/Container_Shop_in_Joe_Slovo_Park.jpg" alt="drawing" width="500"/>

##### El reto

Tu tarea es escribir una aplicación de catálogo de telefonos muy simple (o no). Los requisitos mínimos para que leamos tu código son los siguientes:

1. Escribir una API REST en el lenguaje que te resulte más cómodo (NodeJS, Rails, Java) que:
 - Tenga 1 endpoint `/teléfonos`
 - Devuelve la carga adjunta "phones.json"
 - No hay necesidad de una capa de persistencia (BBDD). 
2. Escribir una aplicación de React que muestre los teléfonos de la API.
 - Utilice Axios (o una biblioteca similar) para obtener datos de la API REST.
 - Mostrar una lista inicial con todos los teléfonos
 - Cuando se selecciona un modelo de teléfono de la lista, se muestra una vista detallada del teléfono que muestra algunos detalles más sobre el mismo.
 - Mostrar un componente tipo spinner o de marcador de posición mientras la solicitud de la API está en curso.
 - Haz que se vea decente. No hay necesidad de un diseño súper sofisticado, pero como mínimo, hazlo algo sensible para que no se vea terrible en un teléfono móvil. Añade imágenes para cada dispositivo.
3. Envía el código a un repositorio público de github con un README.md que explique cómo ejecutar la API y la aplicación Frontend.

##### Los bonus
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

Los límites los pones TU, demuestra el motivo de que acabemos eligiendote para el puesto.

 - Puedes hacer una API compleja, añadir login, un carrito de la compra...
 - Puedes maquetarlo en exclusiva para movil a modo de app...

Ahora bien, el limite de entrega es el Viernes 7 a las 11:00 am.  


Para comenzar con el reto haz fork del repositorio y para entregarlo no olvides hacer PR. Currate un Readme.MD bueno si no se adjuntan las instrucciones para correr el repo tu candidatura quedará invalidada.
---------------------------------------------------------------------------------------------------------------------------------------------
INSTRUCCIONES PARA CORRER EL REPO (IMPRESCINDIBLE TENER GIT INSTALADO EN LA TERMINAL)->
1. Desde este repositorio en mi cuenta, pulse el boton que pone Fork arriba a la derecha y habrá forkeado este repositorio a su cuenta de Github.  
2. Desde este repositorio en su perfil, pulse la flecha en el boton verde que pone 'code' y copie la url que sale para poder clonar este repositorio y ejecutarlo. 
3. Una vez copiada la dirección url, en su terminal, desde la carpeta que le gustaría guardar este proyecto, escriba: git clone <URL>
4. Una vez ejecutada la linea de comando del paso 3, habrá conseguido copiar el proyecto a su ordenador.  
5. Parta la terminal en dos ventanas, y en una escriba npm start y conseguiría ejecutar el proyecto pero hay un problema, que es que este proyecto está hecho en local y por eso no tendria acceso a la base de datos dado que está en mi ordenador.
---------------------------------------------------------------------------------------------------------------------------------------------
INSTRUCCIONES PARA NAVEGAR EN LA WEB
La página web es muy sencilla, tiene la página de inicio que muestra un listado de los telefonos moviles ordenados dentro de unas 'cajas' por asi llamarlo.  Las 'cajas' tienen un boton en el que pone "Más detalles" que si es pulsado renderiza una vista con la descripción del movil seleccionado.  Esta vista incluye un carousel de trés imágenes por movil que se van pasando cada 3 segundos.  Debajo de las fotos hay un boton que manda al usuario de vuelta a la página de inicio.  En la página de inicio al principio hay un boton que pone "Añadir un nuevo teléfono" que si es paretado muestra un modal con un formulario para añadir un nuevo telefono a la lista.  La vista se actualiza automaticamente sin necesidad de refrescar la página para incluir el nuevo telefono creado.  Hay una barra de navegación con dos links a cada lado, los dos lelvan de vuelta a la página de inicio. He incluido una opción de descuento que, si se le añade un número, es interpretado como un porcentage y muestra el precio original tachado junto al precio aplicandose el descuento.
---------------------------------------------------------------------------------------------------------------------------------------------
EXPLICACIÓN DE LOS PASOS Y RAZONAMIENTO
Para ser más directo y conciso voy a ir respondiendo a los puntos uno a uno y explicando lo que he hecho.
1. He decidido usar NodeJS que es el lenguaje que mejor se me da para los temas de backend
 - Tenga 1 endpoint `/teléfonos` ->  La aplicación tiene un endpoint /telefonos que tiene la funcionalidad de mostrar un listado de todos los telefonos móviles en la base de datos
 - Devuelve la carga adjunta "phones.json" -> la base de datos recibe peticiones y devuelve .json.  No hay nignuna otra función para la base de datos y está simplificada al máximo
 - No hay necesidad de una capa de persistencia (BBDD).  -> Me siento mucho más agusto trabajando con una base de datos
2. Escribir una aplicación de React que muestre los teléfonos de la API.  
 - Utilice Redux para la administración del estado y Axios (o una biblioteca similar) para obtener datos de la API REST. (Puedes no usar Redux) -> he decidido no usar Redux dado que me estoy formando aún en Redux y quería poder presentar un producto viable dentro del plazo de tiempo.  He usado axios para obtener los datos de la API REST.
 - Mostrar una lista inicial con todos los teléfonos -> No hay página de inicio como tal, la página principar es el listado de los teléfonos móviles.  He añadido un boton para poder añadir nuevos teléfonos móviles.
 - Cuando se selecciona un modelo de teléfono de la lista, se muestra una vista detallada del teléfono que muestra algunos detalles más sobre el mismo. -> Hay una segunda vista, que es la de los detalles del teléfono móvil escogido.  Aquí se muestra la información de los datos del teléfono.  
 - Mostrar un componente tipo spinner o de marcador de posición mientras la solicitud de la API está en curso. -> El componente modo spinner está hecho con css puro y un minimo de html para mostrarlo.
 - Haz que se vea decente. No hay necesidad de un diseño súper sofisticado, pero como mínimo, hazlo algo sensible para que no se vea terrible en un teléfono móvil. Añade imágenes para cada dispositivo. -> He añadido un carousel de imágenes en la vista de los detalles y he añadido dos fotos más (tres en total) por móvil.  El diseño y estilo vienen de componentes de bootstrap.

 bonus -> Con un poco más de tiempo (para la fecha de entrega, dado que seguiré trabajando en esto) me hubiese gustado añadir un sistema de roles, editar los telefonos y borrarlos, un carrito de la compra junto a un boton de comprar, enviar un correo a través de nodemailer al comprar un movil, subir las imágenes a cloudinary, usar Redux, Hooks, puntuación más gráfica (con estrellas) y tabla de comentarios y recomendaciones. Entre muchas cosas.
