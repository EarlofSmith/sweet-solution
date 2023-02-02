const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// const helpers = require('./utils/helpers');

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
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      order_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      special_instructions: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      total_price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      

      // refactor some of the table fields to put the appropriate data in.

    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'order',
    }
);

module.exports = Order;

// We worked on this page together.