1. Now we have to create two different `Modules` for having both `client` and `server` side code.
2. So, firstly let's create `client` module first by `File->New->Module` and select `React`.
3. Then place all the existing files inside `client` module and move inside the client module by `cd client` and then run `npm install` command.
4. Now the client side should work as usual when you run `npm run start` inside `client` module.
5. Then let's create backend module called `server` by `File->New->Module` and select `Express`.
6. Then it will create an `Express` app inside `server` module.
7. Then change the default port from `3000` to `4000` inside `server.bin.www.js`.
8. Then check default url routes defined inside Express server such as `http://localhost:4000` & `http://localhost:4000/users`
9. Now let's install `nodemon` to see realtime updates on the backend for easy development.
   `npm install nodemon`
10. Then update the `package.json` file's script section by adding new script to execute server with nodemon just from dev env like below.
    `"scripts": {
       "dev": "nodemon ./bin/www"
    },`
11. Then let's rename `users.js` as `ProductRoutes.js` and modify the current routing to this.
 `/* GET products listing. */
   router.get('/all', function(req, res, next) {
       res.send(
          [
              {
                  "id":  1,
                  "name": "Spinach",
                  "price": 200.00,
                  "currency": "LKR",
                  "image": "spinach.png"
              },
              {
                  "id":  2,
                  "name": "Tomato",
                  "price": 300.00,
                  "currency": "LKR",
                  "image": "tomato.png"
              },
              {
                  "id":  3,
                  "name": "Beans",
                  "price": 250.00,
                  "currency": "LKR",
                  "image": "beans.png"
              }
          ]
       );
   });`
12. You need allow CORS from server side to enable communication from client side with the server side.
    `// Enable CORS for all routes
     app.use(cors());
     // Handle preflight requests
     app.options('*', cors());`
13. Then for reuse of these objects and for clean code you can extract the product list in to separate js file called `const.js` in a seperate folder called `constants`.
    `const productList = [
    {
       "id":  1,
       "name": "Spinach",
       "price": 200.00,
       "currency": "LKR",
       "image": "spinach.png"
    },
    {
       "id":  2,
       "name": "Tomato",
       "price": 300.00,
       "currency": "LKR",
       "image": "tomato.png"
    },
    {
       "id":  3,
       "name": "Beans",
       "price": 250.00,
       "currency": "LKR",
       "image": "beans.png"
    }
    ];

    const test = [];

    module.exports = [productList, test];`

14. Then inside `product.js` please import `const.js` and use it there.
    `const [productList] = require('./const')

    /* GET products listing. */
    router.get('/all', function(req, res, next) {
        res.send(productList);
    });`
15. You can use postman to test these APIs better.
16. We have created a GET endpoint already and tested it. Now let's create a POST endpoint to see how it works.
17. For that let's create a Middleware to call routes for our new routes file called `ContactRoutes.js` and place this code inside it.
    `const express = require('express');
     const router = express.Router();

     /* POST contact us */
     router.post('/submit', function(req, res, next) {
         const requestData = req.body;
         console.log(requestData);
         res.send("ContactRoutes details received successfully!");
     });

    module.exports = router;`
18. You can test this POST endpoint only using Postman API testing tool. You can't test this endpoint directly through web browser since browsers default support only to test GET endpoints.
