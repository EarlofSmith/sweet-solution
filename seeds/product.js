const { Product } = require('../models'); 

const productData = [
    {
        product_name: "chocolate chip cookie", 
        category_id: 1, 
        price_per: 2.00 
    },
    {
        product_name: "peanut butter cookie", 
        category_id: 1, 
        price_per: 2.00
    },
    {
        product_name: "snickerdoodle", 
        category_id: 1, 
        price_per: 2.00
    },
    {
        product_name: "key lime pie", 
        category_id: 2, 
        price_per: 25.00 
    },
    {
        product_name: "apple pie", 
        category_id: 2, 
        price_per: 25.00 
    },
    {
        product_name: "french silk pie", 
        category_id: 2, 
        price_per: 25.00 
    },
    {
        product_name: "german chocolate cupcake", 
        category_id: 3, 
        price_per: 3.00
    },
    {
        product_name: "strawberry shortcake cupcake", 
        category_id: 3, 
        price_per: 3.00
    },
    {
        product_name: "red velvet cake", 
        category_id: 3, 
        price_per: 30.00
    },
    {
        product_name: "new york cheesecake", 
        category_id: 4, 
        price_per: 30.00
    },
    {
        product_name: "chocolate cheesecake", 
        category_id: 4, 
        price_per: 30.00
    },
    {
        product_name: "triple berry cheesecake", 
        category_id: 4, 
        price_per: 30.00
    },
    {
        product_name: "chocolate chip scone", 
        category_id: 5, 
        price_per: 4.00
    },
    {
        product_name: "blueberry scone", 
        category_id: 5, 
        price_per: 4.00
    },
    {
        product_name: "cranberry orange scone", 
        category_id: 5, 
        price_per: 4.00
    },
    {
        product_name: "apple turnover", 
        category_id: 5, 
        price_per: 4.00
    },
    {
        product_name: "cream cheese danish", 
        category_id: 5, 
        price_per: 5.00
    },
    {
        product_name: "sourdough loaf", 
        category_id: 6, 
        price_per: 8.00
    },
    {
        product_name: "cranberry walnut sourdough", 
        category_id: 6, 
        price_per: 9.00
    },
    {
        product_name: "garlic and olive sourdough", 
        category_id: 6, 
        price_per: 11.00
    },
    {
        product_name: "rye sourdough", 
        category_id: 6, 
        price_per: 10.00
    },
    {
        product_name: "whole wheat loaf", 
        category_id: 6, 
        price_per: 9.00
    },
    {
        product_name: "banana bread (GF)", 
        category_id: 7, 
        price_per: 7.00
    },
    {
        product_name: "monster cookie (GF)", 
        category_id: 7, 
        price_per: 3.00
    },
    {
        product_name: "cherry pie (GF)", 
        category_id: 7, 
        price_per: 25.00
    },
    {
        product_name: "mocha cupcake (Vegan)", 
        category_id: 8, 
        price_per: 4.00
    },
    {
        product_name: "pumpkin cheesecake (Vegan)", 
        category_id: 8, 
        price_per: 35.00
    },
    {
        product_name: "cherry cheesecake (Vegan)", 
        category_id: 8, 
        price_per: 35.00
    },
    {
        product_name: "sugar cookie (Vegan)", 
        category_id: 8, 
        price_per: 3.00
    }
]

const seedProducts = () => Product.bulkCreate(productData); 

module.exports = seedProducts; 