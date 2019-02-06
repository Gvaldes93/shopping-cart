## Shopping Cart
A Node/Express application server with Typescript, Jest as test runner, express-session and written in ES6 and transpiled with Babel.
This app uses express-session to keep state of the cart between requests, notice no store is specified for this, consider 
utilising a store as for example redis for a production environment. 
Business logic was developed by using TDD approach. You can run test with the command `npm test`.


### Quickstart
Build the docker image by running `docker build -t shoppingapp .`
This will run test and build the image. 
Start the docker image with `docker run -p 3000:3000 shoppingapp`

### API 
The API was built following HATEOAS.
To start, explore the API: 
__http://localhost:3000/api - GET__

#### Products Endpoint
__http://localhost:3000/api/products - GET__
__http://localhost:3000/api/products/{id} - GET__

### Cart Endpoint
__http://localhost:3000/api/cart - GET, PUT, DELETE__

### Example flow 
With curl, open a new terminal and run:
* List products `curl -b cookie-jar.txt -c cookie-jar.txt -X GET http://localhost:3000/api/products`
* Add a product to the cart with this command
~~~~
curl -b cookie-jar.txt -c cookie-jar.txt -X PUT http://localhost:3000/api/cart \
-H 'Content-Type: application/json' \
-d '{
        "id": 2,
         "name": "Axe",
        "price": 190.51
  }'
~~~~
* Adding other ...
~~~~
curl -b cookie-jar.txt -c cookie-jar.txt -X PUT http://localhost:3000/api/cart \
-H 'Content-Type: application/json' \
-d '{
        "id":1,
        "name":"Sledgehammer",
        "price":125.76
    }'
~~~~

* Check cart is updated `curl -b cookie-jar.txt -c cookie-jar.txt -X GET http://localhost:3000/api/cart`
* When no cookies are sent you get an empty cart `curl -X GET http://localhost:3000/api/cart` since express creates a new session.
* Delete product from cart
~~~~
curl -b cookie-jar.txt -c cookie-jar.txt -X DELETE http://localhost:3000/api/cart \
    -H 'Content-Type: application/json' \
    -d '{
            "id": 2,
             "name": "Axe",
            "price": 190.51
      }'
~~~~

#### cleaning up
When finish don't forget to remove the file cookie-jar.txt
and delete the docker image by running `docker ps -a` grab CONTAINER ID value for image "shoppingapp", 
run `docker rm -f container-id` and then `docker rmi shoppingapp`.
