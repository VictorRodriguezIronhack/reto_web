# The Phone Cave challenge

<img src="https://futurechallenges.org/wp-content/uploads/2013/12/Container_Shop_in_Joe_Slovo_Park.jpg" alt="drawing" width="500"/>

# Introduction

IronHack Career Week challenge: a full stack e-commerce with products list, product details and cart using React and Redux for frontend and Node, Express and MongoDB for backend. 


# Instructions


## Install

- Run `npm i` on the root directory


# SERVER

1. Creation of a REST API with Express.js and Node.js. (Postman for testing the endpoints)

## Here's the route we will be using:

|   Route   | HTTP Verb |   Description   |
|-----------|-----------|-----------------|
| `http://localhost:5000/api/phones/getAllPhones` |    GET   | json with phones list |
| `http://localhost:5000/api/phones/getOnePhone/:id` |    GET   | json with one phone |

## Express generator

Boilerplate for a basic ExpressJS backend

## Run

- Create a `.env` file on the /server directory to populate the database ( DB_LOCAL=mongodb://localhost/phones ) and port ( PORT=5000 )
- Run `npm run dev` command on the /server directory


2. Seed MongoDB Database

## Seed

- Run `bin/seed.js`


# CLIENT

3. Creation of React App which shows phones list from the API

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- UI Framework: React Bootstrap
- Redux for state management
- Axios to fetch data from the API

## Run

  In /client directory, you can run:

- Run `npm start`

- Open http://localhost:3000) to view it in the browser.The page will reload if you make edits.
  You will also see any lint errors in the console.

## Here's the route we will be using:

|   Route   | HTTP Verb |   Description   |
|-----------|-----------|-----------------|
| `http://localhost:3000/` |    GET   |  shows phones list |
| `http://localhost:3000/phone/:id` |    GET   | shows one phone details |
| `http://localhost:3000/cart` |    GET   | shows shopping cart |
