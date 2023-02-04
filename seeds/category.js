const { Category } = require('../models'); 

const categoryData = [
    {
        category_name: "Cookies"
    },
    {
        category_name: "Pies"
    },
    {
        category_name: "Cakes"
    },
    {
        category_name: "Cheesecakes"
    },
    {
        category_name: "Pastries"
    },
    {
        category_name: "Bread"
    },
    {
        category_name: "Gluten-Free"
    },
    {
        category_name: "Vegan"
    }
]; 

const seedCategory = () => Category.bulkCreate(categoryData); 

module.exports = seedCategory; 