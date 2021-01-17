# Welcome to The Phone Cave

This is an app that presents some mobile phones from different brands. You can also access the detail of every product.

The app is composed by a client side and a server side component and both of them must to be stood up to make the app work.

To do so:

1. Run the app, you have to fork this repo, clone it in your local machine and go through your machine's CLI to the project folder.

2. Once you are in the project folder, you will find a client and a server folder. In two different tabs of your CLI, go to the client folder and run the following command:

```
<b>npm i</b>
```

This will automatically install all the necessary dependencies (Node.js) of the project. 

3. Do the same in the server folder.

4. To start using the server, create a new *.env* file and write in it the following environment variables:

```
<b>PORT=5000</b>
```

and

```
<b>DOMAIN_LOCAL=http://localhost:3000</b>
```

5. Once you have done this, run the following command in the server side:

```
<b>npm run dev</b>
```
You will see that the server will automatically stand up. 

6. In the client folder, run the following command:

```
<b>npm start</b>
```

The client side app will automatically open in your browser. If not, type the following URL to access the client app:
http://localhost3000. That's all! You will see the complete application running in your PC.

### Server endpoints table

Endpoint | Method | Function
---------|--------|----------
/telephones | GET | Retieve all the available phones.

You will see two different pages in this app. The first one shows a list of mobile phones. You can see each mobile phone details by clicking on the button called *See details*. This will redirect you to the page that holds the phone details. 

Enjoy purchasing your new phone! 

#### Author: Ramón Rodríguez