## Shopping Cart
Shopping cart API.
A Node Express application with Typescript Jest as test runner, written in ES6 and transpiled with Babel.

### Quickstart
build the docker image by running `docker build -t shoppingapp .`
This will run test and build the image. 
Start the docker image with `docker run -p 3000:3000 shoppingapp`

### API 
The API was built following HATEOAS methodologies. You can explore the api here
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

#### cleanin up
When finish don't forget to remove the file cookie-jar.txt
and delete the docker image by running `docker ps -a` grab CONTAINER ID value for image "shoppingapp", 
run `docker rm -f container-id` and then `docker rmi shoppingapp`.
