const { Product } = require('../models'); 

const productData = [
    {
        product_name: "chocolate chip cookie", 
        category_id: 1, 
        price_per: 2.00, 
        description: "Cupcake ipsum dolor sit amet chocolate bar.", 
    },
    {
        product_name: "peanut butter cookie", 
        category_id: 1, 
        price_per: 2.00, 
        description: "Gummies I love muffin sugar plum croissant.", 
    },
    {
        product_name: "snickerdoodle", 
        category_id: 1, 
        price_per: 2.00, 
        description: "Cookie chupa chups liquorice chocolate macaroon icing dragée. ", 
    },
    {
        product_name: "key lime pie", 
        category_id: 2, 
        price_per: 25.00 , 
        description: "Pie lemon drops brownie ice cream pudding.", 
    },
    {
        product_name: "apple pie", 
        category_id: 2, 
        price_per: 25.00 , 
        description: "Toffee brownie sweet roll jelly-o carrot cake halvah apple pie lollipop jujubes.", 
    },
    {
        product_name: "french silk pie", 
        category_id: 2, 
        price_per: 25.00, 
        description: "Sweet roll carrot cake brownie danish cupcake sweet muffin marshmallow.", 
    },
    {
        product_name: "german chocolate cupcake", 
        category_id: 3, 
        price_per: 3.00, 
        description: "Sweet roll carrot cake brownie danish cupcake sweet muffin marshmallow.", 
    },
    {
        product_name: "strawberry shortcake cupcake", 
        category_id: 3, 
        price_per: 3.00, 
        description: "Sweet roll carrot cake brownie danish cupcake sweet muffin marshmallow.", 
    },
    {
        product_name: "red velvet cake", 
        category_id: 3, 
        price_per: 30.00, 
        description: "Sweet roll carrot cake brownie danish cupcake sweet muffin marshmallow.", 
    },
    {
        product_name: "new york cheesecake", 
        category_id: 4, 
        price_per: 30.00, 
        description: "Sweet roll carrot cake brownie danish cupcake sweet muffin marshmallow.", 
    },
    {
        product_name: "chocolate cheesecake", 
        category_id: 4, 
        price_per: 30.00, 
        description: "Sweet roll carrot cake brownie danish cupcake sweet muffin marshmallow.", 
    },
    {
        product_name: "triple berry cheesecake", 
        category_id: 4, 
        price_per: 30.00, 
        description: "Sweet roll carrot cake brownie danish cupcake sweet muffin marshmallow.", 
    },
    {
        product_name: "chocolate chip scone", 
        category_id: 5, 
        price_per: 4.00, 
        description: "Sweet roll carrot cake brownie danish cupcake sweet muffin marshmallow.", 
    },
    {
        product_name: "blueberry scone", 
        category_id: 5, 
        price_per: 4.00, 
        description: "Sweet roll carrot cake brownie danish cupcake sweet muffin marshmallow.", 
    },
    {
        product_name: "cranberry orange scone", 
        category_id: 5, 
        price_per: 4.00, 
        description: "Sweet roll carrot cake brownie danish cupcake sweet muffin marshmallow.", 
    },
    {
        product_name: "apple turnover", 
        category_id: 5, 
        price_per: 4.00, 
        description: "Sweet roll carrot cake brownie danish cupcake sweet muffin marshmallow.", 
    },
    {
        product_name: "cream cheese danish", 
        category_id: 5, 
        price_per: 5.00, 
        description: "Sweet roll carrot cake brownie danish cupcake sweet muffin marshmallow.", 
    },
    {
        product_name: "sourdough loaf", 
        category_id: 6, 
        price_per: 8.00, 
        description: "Sweet roll carrot cake brownie danish cupcake sweet muffin marshmallow.", 
    },
    {
        product_name: "cranberry walnut sourdough", 
        category_id: 6, 
        price_per: 9.00, 
        description: "Sweet roll carrot cake brownie danish cupcake sweet muffin marshmallow.", 
    },
    {
        product_name: "garlic and olive sourdough", 
        category_id: 6, 
        price_per: 11.00, 
        description: "Sweet roll carrot cake brownie danish cupcake sweet muffin marshmallow.", 
    },
    {
        product_name: "rye sourdough", 
        category_id: 6, 
        price_per: 10.00, 
        description: "Sweet roll carrot cake brownie danish cupcake sweet muffin marshmallow.", 
    },
    {
        product_name: "whole wheat loaf", 
        category_id: 6, 
        price_per: 9.00, 
        description: "Sweet roll carrot cake brownie danish cupcake sweet muffin marshmallow.",  
    },
    {
        product_name: "banana bread (GF)", 
        category_id: 7, 
        price_per: 7.00, 
        description: "Sweet roll carrot cake brownie danish cupcake sweet muffin marshmallow.", 
    },
    {
        product_name: "monster cookie (GF)", 
        category_id: 7, 
        price_per: 3.00, 
        description: "Sweet roll carrot cake brownie danish cupcake sweet muffin marshmallow.", 
    },
    {
        product_name: "cherry pie (GF)", 
        category_id: 7, 
        price_per: 25.00, 
        description: "Sweet roll carrot cake brownie danish cupcake sweet muffin marshmallow.", 
    },
    {
        product_name: "mocha cupcake (Vegan)", 
        category_id: 8, 
        price_per: 4.00, 
        description: "Sweet roll carrot cake brownie danish cupcake sweet muffin marshmallow.", 
    },
    {
        product_name: "pumpkin cheesecake (Vegan)", 
        category_id: 8, 
        price_per: 35.00, 
        description: "Sweet roll carrot cake brownie danish cupcake sweet muffin marshmallow.", 
    },
    {
        product_name: "cherry cheesecake (Vegan)", 
        category_id: 8, 
        price_per: 35.00, 
        description: "Sweet roll carrot cake brownie danish cupcake sweet muffin marshmallow.", 
    },
    {
        product_name: "sugar cookie (Vegan)", 
        category_id: 8, 
        price_per: 3.00, 
        description: "Sweet roll carrot cake brownie danish cupcake sweet muffin marshmallow.", 
    }
]

const seedProducts = () => Product.bulkCreate(productData); 

module.exports = seedProducts; 
