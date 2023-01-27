const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const helpers = require('./utils/helpers');


class Order extends Model {}


Order.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            }
          },
          product_id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            references: {
                model: 'product',
                key: 'id',
            }
          },
          due_date: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // validate: {
            //     isAfter: 
            // }
          },
          quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          total_price: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          special_instructions: {
            type: DataTypes.TEXT,
            allowNull: true
          },
          sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'orders',
    }
);

module.exports = Order