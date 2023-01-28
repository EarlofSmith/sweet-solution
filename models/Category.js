const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Category extends Model {}

Category.init(
    {
        id: {
            type: DataTypes.INTEGER, 
            allowNull: false, 
            primaryKey: true, 
            autoIncrement: true, 
        }, 
        category_name: {
            type: DataTypes.STRING, 
            allowNull: false, 
        }, 
        product_id: {
            type: DataTypes.INTEGER, 
            allowNull: true, 
            references: {
                model: 'products', 
                key: 'id', 
            }
        },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
    }
);

module.exports = Category; 

// We worked on this page together.