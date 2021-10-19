
<div align="center">
<h1>Reto web - The phone cave</h1> 
</div>

For the CLIENT side, check it <a href="https://github.com/AitorSantaeugenia/reto_web/tree/main/client">here</a>

### SERVER side

- NodeJS | ExpressJS and MongoDB
- Routes and models created. 

---

#### Routes

##### Project routes

| HTTP verb | URL                        | Request body | Action                        |
| --------- | -------------------------- | ------------ | ----------------------------- |
| GET       | `/api/telefonos`           | (empty)      | Returns all the phones        |
| GET       | `/api/telefonos/:phoneID`  | (empty)      | Returns the specified phone   |

##### Auth routes

| HTTP verb | URL            | Request Headers                 | Request Body              |
| --------- | -------------- | ------------------------------- | ------------------------- |
| POST      | `/auth/signup` | --                              | { email, password, name } |
| POST      | `/auth/login`  | --                              | { email, password }       |
| GET       | `/auth/verify` | Authorization: Bearer \< JWT \> | --                        |



<hr>

#### Models

##### Phone

```js
{
         idPhone: { type: Number, unique: true },
	name: String,
	manufacturer: String,
	description: String,
	color: String,
	price: Number,
	imageFileName: String,
	screen: String,
	processor: String,
	ram: Number
}
```

##### User

```js
{
	email: { type: String, unique: true, required: true },
	password: { type: String, required: true },
	name: { type: String, required: true },
	image: String
}
```

