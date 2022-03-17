# RetoWeb App
Final SPA project to achieve a full "connected and working" app in 4h.

I've created the server with and endpoint recieving data as json format. 
The client part created with React has an Axios call to get the data form server and show it on the different endpoints detailed below:



## ENDPOINTS
| HTTP Method | URI path            | Description      |
| :---         |   :---            |          ---:    |
| GET          | /                  | Render index page with a products list   |
| GET          | /detalles/:product_id          | Render the product details  |
