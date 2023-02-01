const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}

Product.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          product_name: {
            type:DataTypes.STRING,
            allowNull: false,
          },
          category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'category',
                key: 'id'
            }
          },
          price_per: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                isNumeric: true,
                isDecimal: true,
            }
          },
          description: {
            type: DataTypes.TEXT,
            allowNull: true,
          },
          review_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'review',
                key: 'id'
            }
          },
          //image_file: {
          //  type: DataTypes.STRING,
          //  allowNull: true,
          //},
        },
        {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
    }
);

module.exports = Product;

// We worked on this page together.