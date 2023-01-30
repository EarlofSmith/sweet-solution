
// Table data model associations
const Category = require('./Category');  // for the "Categories" table data model association
const Product = require('./Products');   // for the "Products" table data model association
const User = require('./User');  // for the "Users" table data model association
const Order = require('./Orders');  // for the "Orders" table data model association
const Review = require('./Reviews');  // for the "Reviews" table data model association
//const Previous_Order = require('./Previous_Order');  // for the "Previous_Orders" table data model association
  // Deleted table because of being not necessary


//
// "Categories" data/table relationships:
//

// for the many-to-many relationship with the "Products" table
Category.belongsToMany(Product, {through: CategoryProducts});
  // using an automatically-created junction/association table that is named as 
  // "<primary table><secondary table>" and that has automatic "<primary table>Id" and 
  // "<secondary table>Id" columns for join references/queries between the related tables; 
  // and those column names can be custom/alias-named (such as with an ending "_id")


//
// "Products" data/table relationships:
//

// for the one-to-many relationship with the "Reviews" table
Product.hasMany(Review, {
  foreignKey: 'product_id'
  // other options?
});

// for the many-to-many relationship with the "Categories" table
Product.belongsToMany(Category, {through: CategoryProducts});
  // using an automatically-created junction/association table that is named as 
  // "<primary table><secondary table>" and that has automatic "<primary table>Id" and 
  // "<secondary table>Id" columns for join references/queries between the related tables; 
  // and those column names can be custom/alias-named (such as with an ending "_id")

// for the many-to-many relationship with the "Orders" table
Product.belongsToMany(Order, {through: ProductOrders });  
  // using an automatically-created junction/association table that is named as 
  // "<primary table><secondary table>" and that has automatic "<primary table>Id" and 
  // "<secondary table>Id" columns for join references/queries between the related tables; 
  // and those column names can be custom/alias-named (such as with an ending "_id")


//
// "Users" data/table relationships:
//

// for the one-to-many relationship with the "Orders" table
User.hasMany(Order, {
  foreignKey: 'user_id'
  // No delete should occur; only set "Cancelled" status.
  // other options?
});
  
// for the one-to-many relationship with the "Reviews" table
User.hasMany(Review, {
  foreignKey: 'user_id'
  // No delete should occur; only set "Cancelled" status.
  // other options?
});
  
  
//
// "Orders" data/table relationships:
//

// for the many-to-one relationship with the "Users" table
Order.belongsTo(User, {
  foreignKey: 'user_id'
  // other options?
});

// for the many-to-many relationship with the "Products" table
Order.belongsToMany(Product, {through: ProductOrders});
  // using an automatically-created junction/association table that is named as 
  // "<primary table><secondary table>" and that has automatic "<primary table>Id" and 
  // "<secondary table>Id" columns for join references/queries between the related tables; 
  // and those column names can be custom/alias-named (such as with an ending "_id")


//
// "Reviews" data/table relationships:
//

// for the many-to-one relationship with the "Users" table
Review.belongsTo(User, {
  foreignKey: 'user_id'
  // other options?
});

// for the many-to-one relationship with the "Products" table
Review.belongsTo(Product, {
  foreignKey: 'product_id'
  // other options?
});


//
// data models exports
//

module.exports = { User, Category, Order, Previous_Order, Product, Review };
