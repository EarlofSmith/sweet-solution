const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Previous_Order extends Model {}

Previous_Order.init(
    {
        id: {
            type: DataTypes.INTEGER, 
            allowNull: false, 
            primaryKey: true, 
            autoIncrement: true, 
        }, 
        order_id: {
            type: DataTypes.INTEGER, 
            allowNull: true, 
            references: {
                model: 'orders', 
                key: 'id', 
            }, 
        }, 
        user_id: {
            type: DataTypes.INTEGER, 
            allowNull: true, 
            references: {
                model: 'user', 
                key: 'id', 
            }, 
        }, 
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'previous_order',
    }
);

module.exports = Previous_Order; 

// We worked on this page together.