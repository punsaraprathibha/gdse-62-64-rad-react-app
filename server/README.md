1. Let's add a `.env` file to maintain all the server config related variables, settings, and sensitive information.
    Just define server port here in dotEnv file and use it inside `www.js`
    `PORT=4000`
2. For accessing properties inside dotEnv file, you need to install `npm install dotenv` command to install dotEnv as a dependency.
    `const dotEnv = require('dotenv');

    dotEnv.config();

    /**
    Get port from environment and store in Express.
    */

    const port = normalizePort(process.env.PORT || '4000');
    app.set('port', port);`
3. Now let's extract the controller related (req, response) code in to a separate layer called `controller`
     `router.get('/all', ProductController.getAllProducts);` <= ProductRoutes.js
     `const ProductController = {
         getAllProducts: function (req, res, next) {
            res.send(productList);
         }
     }`

     `router.post('/submit', ContactController.submitContactDetails);` <= ContactRoutes.js
      `const ContactController = {
          submitContactDetails: async function (req, res, next) {
             const requestData = req.body;
             console.log(requestData);
             res.send("ContactRoutes details received successfully!");
          }
      }`

4. You can define any Environment related properties inside this file and access them inside the project files.
5. Now let's configure MongoDB configurations inorder to communicate with our MongoDb database.
6. For that firstly, let's go to mongodb official website to create an account.
    `https://account.mongodb.com/account/login`
7. Then choose your signup method and sign up to the MongoDb site, and it will redirect you to MongoDB dashboard.
8. Then you'll have to create a new project and provide project name, additional users to access the project and click create.
9. Then you need to create a deployment. So, click `+Create` button and select a free cluster and select.
    service provider, region, and the name of the cluster and then click on create.
10. Then please provide username and password you're going to use when accessing this cluster.
11. Please remember and better to note down this password which we're going to use in future for connecting with db.
12. Then you've to define what are the server addresses (web app addresses) you're going to access this cluster.
13. Then click `connect` button with green color and select `Drivers`
14. Then define node version and copy the `mongodb` install command and run inside `server`.
    `npm install mongodb`
15. Then copy the connection string displayed in the site and define a new env variable inside dotEnv file and paste like below.
    `MONGODB_URL=mongodb+srv://<cluster-username>:<cluster-password>@<cluster-name>.vj1hean.mongodb.net/?retryWrites=true&w=majority`
16. Now let's start db configuration to our application through the code.
17. For that, let's firstly create a new package called `db` and place a file calle `db.js` inside it to hold db configs.
    `const mongoose = require('mongoose');
     const dotEnv = require('dotenv');

     dotEnv.config();

     const MONGODB_URL = process.env.MONGODB_URL;

     const db = async () => {
        try {
           const conn = await mongoose.connect(MONGODB_URL);
           console.log(`Mongo DB connected to : ${conn.connection.host}`);
        } catch (err) {
           console.log("Mongo DB Connect Error:" + err)
        }
     }

     module.exports = db;`
18. Then you have to define in app.js to consume this newly created `db.js` at the startup time.
    `const db = require("./db/db");
     db().then(r => console.log(r));`
19. Now if your configurations are successfully completed, you may see a message like below.
    `Mongo DB connected to : <cluster>.vj1hean.mongodb.net`
20. Now we're ready to access db from our application and do the CRUD operations.
21. Before we do DB operations, we need to have a MongoDB model class which is same as entity with jpa.
22. So, firstly let's create a model called `Product.js` inside a package called model
    `const mongoose = require('mongoose');

     const ProductModel = mongoose.Schema(
         {
            "id":  {
                require: true,
                type: Number,
                unique: true, // Make the "id" field unique
                index: true   // Create an index on the "id" field for better performance
            },
            "name": {
                require: true,
                type: String
            },
            "price": {
                require: true,
                type: Number
            },
            "currency": {
                require: true,
                type: String
            },
            "image": {
               require: true,
               type: String
            }
        },
        { versionKey: false }
     );

     let Product = mongoose.model('Products', ProductModel);

     module.exports = Product;`

23. These are the common CRUD operation methods we use in MongoDB.
    `Product.findById();
     Product.find();
     Product.findOneAndUpdate();
     Product.findOneAndDelete();`
24. These are the routes for the following endpoints.
    `router.post('/save', ProductController.saveProduct);
     router.get('/find/:id', ProductController.findProduct);
     router.put('/update/:id', ProductController.updateProduct);
     router.delete('/delete/:id', ProductController.deleteProduct);`
25. Firstly, let's create a new POST endpoint to save product data to db.
    `const ProductController = {

      saveProduct: async function (req, res, next) {
        try {
            const productData = req.body;
            // Ensure that at least one field to update is provided
            if (!Object.keys(productData).length) {
               return res.status(400).json({error: "Product data can't be empty!"});
            }
            const product = await Product.create(productData);
            res.json(product);
        } catch (error) {
            console.error(error);
           res.status(500).json({error: 'Something Went Wrong!'});
        }
     }
    }`
26. Then you can see adding products to the db from this newly created post endpoint through Postman.
27. Now let's retrieve those product data from DB to send for the frontend.
    `const ProductController = {
        getAllProducts: async function (req, res, next) {
            try {
              const productsList = await Product.find();
              res.json(productsList);
           } catch (error) {
              console.error(error);
              res.status(500).json({error: 'Something Went Wrong!'});
           }
       }
    }`
28. Now see the frontend whether the data showing as usual.
29. Now let's see how to work with other CRUD operations.
30. For find product by id we can use the below code.
    `findProduct: async function (req, res) {
        try {
           const productId = req.params.id;
           let product = await Product.findOne({id: productId});
           res.json(product);
        } catch (error) {
           console.error(error);
           res.status(500).json({error: 'Something Went Wrong!'});
        }
    }`
31. For update product by id we can use below code.
    `updateProduct: async function (req, res) {
       try {
         const productId = req.params.id;
         let productData = req.body;

            // Ensure that at least one field to update is provided
            if (!Object.keys(productData).length) {
                return res.status(400).json({error: 'No fields to update provided'});
            }

            const updatedProduct = await Product.findOneAndUpdate({
                    id: productId
                }, // Filter criteria
                productData,         // Update data
                {new: true});

            if (!updatedProduct) {
                return res.status(404).json({error: 'Product not found'});
            }

            res.json(updatedProduct);
            // res.send("Product details updated successfully!");
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Something Went Wrong!'});
        }
    }`
32. For delete product we can use below code
    `deleteProduct: async function (req, res) {
       try {
            const productId = req.params.id;

            // Use deleteOne to remove the document with the specified _id
            const result = await Product.deleteOne({id: productId});

            if (result.deletedCount === 0) {
                return res.status(404).json({error: 'Product not found'});
            }

            res.json({message: 'Product deleted successfully'});
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Something Went Wrong!'});
        }
    }`
33. Then create a `Contact` model to save contact data comes from frontend.
    `const mongoose = require('mongoose');

    let ContactModel = mongoose.Schema(
    {
      "email": {
         require: true,
         type: String
      },
      "subject": {
         require: true,
         type: String
      },
      "message": {
        require: true,
        type: String
      }
    },
    { versionKey: false }
    );

    let Contact = mongoose.model('Contact', ContactModel);

    module.exports = Contact;`
34. Then define this inside ContactController.
    `const ContactController = {

        submitContactDetails: async function (req, res, next) {
            const contactData = req.body;
            if (!Object.keys(contactData).length) {
               return res.status(400).json({error: "Contact data can't be empty!"});
            }
            let contact = await Contact.create(contactData);
            res.json("Contact details received successfully!");
        }
    }

    module.exports = ContactController;`