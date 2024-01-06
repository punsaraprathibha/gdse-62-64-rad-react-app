const {productsList} = require("../constants/const");
const Product = require('../model/Product');
const e = require("express");

const ProductsController = {

    getAllProducts: async function (req, res, next) {
        try {
            const productList = await Product.find();
            res.status(200).json(productList);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Something Went Wrong!'})
        }
    },

    saveProduct: async function (req, res, next) {
        try {
            const productData = req.body;
            const product = await Product.create(productData);
            res.status(200).json(product);
        } catch (err) {
            console.error(err);
            res.status(500)
                .json({
                    error:
                        'Something Went Wrong!'
                });
        }
    },

    getProduct: async function (req, res, next) {
        try {
            const productId = req.params.id;
            const product = await Product.find({id: productId});
            res.status(200).json(product);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Something Went Wrong!'});
        }
    },

    updateProduct: function (req, res, next) {
        try {
            const productId = req.params.id;
            const productData = req.body;

            const updatedProduct
                = Product.findOneAndUpdate({id: productId}, productData, {new: true});
            if (!updatedProduct) {
                return res.status(404).json({error: 'Product not found!'});
            }
            res.status(200).json(updatedProduct);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Something Went Wrong!' });
        }
    },

    deleteProduct: async function (req, res, next) {
        try {
            const productId = req.params.id;
            const result = await Product.deleteOne({id: productId});
            if (result.deletedCount === 0) {
                return res.status(404).json({error: 'Product not found!'});
            }
            res.status(200).json({message: 'Product deleted successfully!'})

        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Something Went Wrong!' });
        }
    }
}
module.exports = ProductsController;