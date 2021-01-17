<div align='center'> 
<h1> IRONHACK CHALLENGE - PHONE CAVE </h1>
</div>


<img src="https://res.cloudinary.com/dmsx3xete/image/upload/v1610886857/creative-app/Captura_de_pantalla_2021-01-17_a_las_13.33.15_gldz0q.png" alt="Overview">

Phone Cave is a Single Page Application whose mission is to offer the best phones at the best market price. You can check their details and perfom four different actions: **Create**, **Read**, **Update** and **Delete** (CRUD).

**Website:** [Live Demo](https://phone-cave.herokuapp.com/) 

**Video** [Phone Cave](https://res.cloudinary.com/dmsx3xete/video/upload/v1610906548/creative-app/phonecave_jipvfu.mov)

## Goal :heavy_check_mark:

**1. Write a simple phone REST API in the language you find most convenient (NodeJS, Rails, Java) that...**
 - Have 1 endpoint `/phones`
 - Return the attached "phones.json" charge
 - There is no need for a persistence layer (BBDD). 
 
**2. Write a React application that displays the API phones.**
 - Use Redux for state management and Axios (or a similar library) to get data from the REST API. (You may not use Redux)
 - Display an initial list of all phones
 - When you select a phone model from the list, a detailed view of the phone is displayed showing some more details about the phone.
 - Show a spinner or placeholder type component while the API request is in progress.
 - Make it look decent. There's no need for a super sophisticated design, but at the very least, make it a bit sensitive so that it doesn't look terrible on a mobile phone. Add images for each device.
 
**3. Send the code to a public github repository with a README.md that explains how to run the API and the Frontend application.**

## Get Started :rocket:

**CLIENT**
- Run `npm i` on the root directory
- Create a `.env` file on the root directory to include the API URL (`REACT_APP_API_URL`)
- Run `npm start` command on the root directory


**SERVER**
- Run `npm i` on the root directory
- Create a `.env` file on the root directory to populate the database (`DB`), include the port (`PORT`), domain (`DOMAIN`) and Cloudinary credentials (`NAME, KEY, SECRET`).
- Run `npm run dev` command on the root directory

## Technologies 🛠️

- HTML5 
- CSS3
- JavaScript (ES6)
  - ReactJs
  - React Bootstrap
  - AJAX
  - NodeJs
  - MondoDB
  - Mongoose
  - Cloudinary
  - Multer
  - Cors 

## Author ✒️

- [Sara Martínez Vega](https://www.linkedin.com/in/sara-mart%C3%ADnez-vega-5a25991b9/)
