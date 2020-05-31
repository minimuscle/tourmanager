## Tourmanager API Endpoint

### Install:
1. Install the [nodemon]([https://www.npmjs.com/package/nodemon](https://www.npmjs.com/package/nodemon)) dependency: `npm install -g nodemon`
2. Execute `npm install` in the `tm-api` directory
3. To start the API, execute `nodemon` in the `tm-api` directory

### Endpoints

Note: Use [Postman](https://www.postman.com/) for testing.

URL: http://localhost:9000/api

GET Request:  
- `/get/locations`  
- `/get/tours`  
- `/get/users`  

POST Request:  
- `/add/location`  
- `/add/tour`  
- `/add/user`  

POST Request:  
- `/edit/location`  
- `/edit/tour`  
- `/edit/user`  

POST Request:  
- `/delete/location`  
- `/delete/tour`  
- `/delete/user`

POST Request:  
- `/login`  
- `/logout`    
