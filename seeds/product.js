const { Product } = require('../models'); 

const productData = [
    {
        product_name: "Chocolate Chip Cookie", 
        category_id: 1, 
        price_per: 2.00, 
        description: "", 
        filename: '01-chocolate-chip-cookie.jpg',
    },
    {
        product_name: "Peanut Butter Cookie", 
        category_id: 1, 
        price_per: 2.00, 
        description: "", 
        filename: '02-peanut-butter-cookie.jpg',
    },
    {
        product_name: "Snickerdoodle", 
        category_id: 1, 
        price_per: 2.00, 
        description: "", 
        filename: '03-snickerdoodle-cookie.jpg',
    },
    {
        product_name: "Key Lime Pie", 
        category_id: 2, 
        price_per: 25.00 , 
        description: "", 
        filename: '04-key-lime-pie.jpg'
    },
    {
        product_name: "Apple Pie", 
        category_id: 2, 
        price_per: 25.00 , 
        description: "", 
        filename: '05-apple-pie.jpg',
    },
    {
        product_name: "French Silk Pie", 
        category_id: 2, 
        price_per: 25.00, 
        description: "", 
        filename: '06-french-silk-pie.jpg',
    },
    {
        product_name: "German Chocolate Cupcake", 
        category_id: 3, 
        price_per: 3.00, 
        description: "", 
        filename: '07-german-chocolate-cupcake.jpg',
    },
    {
        product_name: "Strawberry Shortcake Cupcake", 
        category_id: 3, 
        price_per: 3.00, 
        description: "", 
        filename: '08-strawberry-cupcake.jpg',
    },
    {
        product_name: "Red Velvet Cake", 
        category_id: 3, 
        price_per: 30.00, 
        description: "", 
        filename: '09-red-velvet-cake.jpg',
    },
    {
        product_name: "New York Cheesecake", 
        category_id: 4, 
        price_per: 30.00, 
        description: "", 
        filename: '10-ny-cheesecake.jpg',
    },
    {
        product_name: "Chocolate Cheesecake", 
        category_id: 4, 
        price_per: 30.00, 
        description: "", 
        filename: '11-chocolate-cheesecake.jpg',

    },
    {
        product_name: "Triple Berry Cheesecake", 
        category_id: 4, 
        price_per: 30.00, 
        description: "", 
        filename: '12-berry-cheesecake.jpg',
    },
    {
        product_name: "Chocolate Chip Scone", 
        category_id: 5, 
        price_per: 4.00, 
        description: "", 
        filename: '13-choco-chip-scone.jpg',
    },
    {
        product_name: "Blueberry Scone", 
        category_id: 5, 
        price_per: 4.00, 
        description: "", 
        filename: '14-blueberry-scone.jpg',
    },
    {
        product_name: "Cranberry Orange Scone", 
        category_id: 5, 
        price_per: 4.00, 
        description: "", 
        filename: '15-cranberry-orange-scone.jpg',
    },
    {
        product_name: "Apple Turnover", 
        category_id: 5, 
        price_per: 4.00, 
        description: "", 
        filename: '16-apple-turnover.jpg',
    },
    {
        product_name: "Cream Cheese Danish", 
        category_id: 5, 
        price_per: 5.00, 
        description: "", 
        filename: '17-cream-cheese-danish.jpg',
    },
    {
        product_name: "Sourdough Loaf", 
        category_id: 6, 
        price_per: 8.00, 
        description: "", 
        filename: '18-sourdough-loaf.jpg',
    },
    {
        product_name: "Cranberry Walnut Sourdough", 
        category_id: 6, 
        price_per: 9.00, 
        description: "", 
        filename: '19-cran-walnut-loaf.jpg',
    },
    {
        product_name: "Garlic and Olive Sourdough", 
        category_id: 6, 
        price_per: 11.00, 
        description: "", 
        filename: '20-olive-loaf.jpg',

    },
    {
        product_name: "Rye Sourdough", 
        category_id: 6, 
        price_per: 10.00, 
        description: "", 
        filename: '21-rye-loaf.jpg',
    },
    {
        product_name: "Whole Wheat Loaf", 
        category_id: 6, 
        price_per: 9.00, 
        description: "",  
        filename: 'whole-wheat-bread.jpg',
    },
    {
        product_name: "Banana Bread (GF)", 
        category_id: 7, 
        price_per: 7.00, 
        description: "", 
        filename: 'gf-banana-bread.jpg',

    },
    {
        product_name: "Sugar Cookie (GF)", 
        category_id: 7, 
        price_per: 3.00, 
        description: "", 
        filename: 'gf-sugar-cookie.jpg',
    },
    {
        product_name: "Cherry Pie (GF)", 
        category_id: 7, 
        price_per: 25.00, 
        description: "", 
        filename: 'gf-cherry-pie.jpg',

    },
    {
        product_name: "Mocha Cupcake (Vegan)", 
        category_id: 8, 
        price_per: 4.00, 
        description: "", 
        filename: 'vegan-mocha-cupcake.jpg',
    },
    {
        product_name: "Pumpkin Cheesecake (Vegan)", 
        category_id: 8, 
        price_per: 35.00, 
        description: "", 
        filename: 'vegan-pumpkin-cheesecake.jpg',
    },
    {
        product_name: "Cherry Cheesecake (Vegan)", 
        category_id: 8, 
        price_per: 35.00, 
        description: "", 
        filename: 'vegan-cherry-cheesecake.jpg',
    },
    {
        product_name: "Ginger Cookie (Vegan)", 
        category_id: 8, 
        price_per: 3.00, 
        description: "", 
        filename: 'vegan-ginger-cookie.jpg',
    }
]

const seedProducts = () => Product.bulkCreate(productData); 

module.exports = seedProducts; 
