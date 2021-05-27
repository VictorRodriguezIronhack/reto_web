# RETO_WEB

This repository is a simple exercise of a SPA, where a list of phones and their details are shown.


## Requirements

You will need to have **node.js** installed. If you do not have it already, you can refer to the [**npm website**](https://www.npmjs.com/get-npm).

## Important

In order to run the server locally, you will need to create an .env with:

- *PORT*: the port number on which the server will be running.
- *DOMAIN_LOCAL*: must be the URL (port included if necessary) on which the Frontend will be running (to be added to the CORS "whitelist")

## Setup

- Fork this repo (if you want to contribute)
- Clone this repo

Then, on the server, you will have to type these commands in your console (valid for Linux):

 ````javascript
sudo npm i nodemon -g // if not already installed
npm install
npm run dev
 ````

Now, on the client, type:

 ````javascript
npm install
npm start
 ````

## Submission

If you want to merge your changes, add them to your GitHub repository and create a PR.


## Backend Rest API endpoints 
&nbsp;
| Method          | Endpoint                            | Functionality                |
| --------------- | ----------------------------------- | ---------------------------- |
| Get             | /api/telefonos                      | List of phones               |
| Get             | /api/detalles/:phoneId              | Details of one phone         |

