# :iphone: Web Challenge:iphone:

Light App to view different fake phones and their details.

Created by: **Héctor Carramiñana**.

A responsive ReactJS App with four available different actions by the user (CRUD):

- Create
- Read
- Update
- Delete

Site URL: [Catalog_App](https://catalog-phone-app.herokuapp.com/) 

## Video summary of the app:
Click to see the video :)

[![YoutubeShow](http://img.youtube.com/vi/oHulvViHLus/0.jpg)](http://www.youtube.com/watch?v=oHulvViHLus "ShowIndex")

I have added a slight effect on the navbar to make it go from transparent to white when the user starts to see the content, and prevent it affect their usage experience.

Light footer is included too like you can see on above video.

## How was it done!? :exploding_head:

**1. Create server/client directories and set up the ports (in this case i used 5000 for server and 3000 for client)**

**2. Install server boilerplate (own resource) and adapt it to API REST**

**3. Install create-react-app in client (PORT 3000 by default. I've decided not change it.)**

**4. In server, create phone.model, Base URLs and endpoints in routes folder**

**5. Use Postman to test all endpoints**

**6. Instal CORS and configurate it to avoid future problems with server requests.**

**7. Go to client:**

  - Install react-router-dom.
  - Install axios for the requests that we will make later from client to server avoiding reload.
  - Install bootstrap, react-bootstrap, import CSS and install MBDReact too (I like this dependency).
  - Route <App> with <Router> to create a SPA (Single Page Application).
  - Create service folder and the PhoneService to use later.
  - Create components (full state components or not, depends of the app). In this case, there are of two types.
  - Give styles with css and check that they render correctly.
  - Route the components in App.js and check it again.
  - Create more services and components to make a complete CRUD.
  - Create a Modal Window to add new phone and edit (better user experience).
  - Create a simple NavBar to have a better vision of the app and use like a home link too.
  - Give effects to the navigation bar (it's transparent) so that when the user scrolls down he can still see the content correctly.
  - Create updateList, refreshPhoneList and others to make that the App automatically updates with any change and the user does not have to refresh the page.

**8. Stop! Go to server now and:**

  - Install multer, Cloudinary and multer-storage-cloudinary.
  - Configurate Cloudinary with your credentials and add it to .env file.
  - Create new route to use Cloudinary.
  - Create the Base URL to correct use of Cloudinary.


**9. Lasts steps on client:**

  - Create the necesary service inside service folder to use it.
  - Change the input form and checkit in React Developer Tools that all is correct :)
  - Check that it works to create and edit phones.


## Do you want to use my API REST? Nice!

Check it: [Catalog_API](https://catalog-phone-api.herokuapp.com/api/phones/phones) 

| API Url | Content |
| ------------- | ------------- |
| https://catalog-phone-api.herokuapp.com/api/phones/phones | GET METHOD - Get an array of objects with the all phones info |
| https://catalog-phone-api.herokuapp.com/api/phones/phoneID  | GET METHOD - Get an object with one phone info |
| https://catalog-phone-api.herokuapp.com/api/phones/newPhone  | POST METHOD - Create new phone |
| https://catalog-phone-api.herokuapp.com/api/phones/delete/phoneID  | DELETE METHOD - Delete one phone |
| https://catalog-phone-api.herokuapp.com/api/phones/editPhone/phoneID  | PUT METHOD - Edit phone info |
  

And...**_That's all Folks._**

## Author ✒️

* **Héctor Carramiñana** - *Complete web development* - (https://github.com/Phector27)

### Built with :heart:

Enjoy it! Happy working💙
