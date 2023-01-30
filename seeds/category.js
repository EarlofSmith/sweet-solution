const { Category } = require('../models'); 

const categoryData = [
    {
        category_name: "cookie"
    },
    {
        category_name: "pie"
    },
    {
        category_name: "cake"
    },
    {
        category_name: "cheesecake"
    },
    {
        category_name: "pastry"
    },
    {
        category_name: "bread"
    },
    {
        category_name: "gluten-free"
    },
    {
        category_name: "vegan"
    }
]; 

const seedCategory = () => Category.bulkCreate(categoryData); 

module.exports = seedCategory; 