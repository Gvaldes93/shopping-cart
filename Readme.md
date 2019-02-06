## Shopping Cart
A Node/Express application server with Typescript, Jest as test runner, express-session and written in ES6 and transpiled with Babel.
This app uses express-session to keep state of the cart between requests, notice no store is specified for this, consider 
utilising a store as for example redis for a production environment. 
Business logic was developed by using TDD approach. You can run the tests with the command `npm test`.


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
Open a new terminal
* List all products `curl -b cookie-jar.txt -c cookie-jar.txt -X GET http://localhost:3000/api/products`
* Add a product to the cart 
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

* Check the cart is updated `curl -b cookie-jar.txt -c cookie-jar.txt -X GET http://localhost:3000/api/cart`
* When no cookies are sent you get an empty cart `curl -X GET http://localhost:3000/api/cart` since express creates a new session.
* Delete a product from the cart
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
When finished with the demo you can remove the file cookie-jar.txt
and delete the docker image by running `docker ps -a` grab the CONTAINER ID value for the image "shoppingapp" 
and run `docker rm -f [container-id]` followed by `docker rmi shoppingapp`.

### Development
Run `npm test -- --watch` to write test and re run the test suite on changes.
To try out the application run `npm start`.
