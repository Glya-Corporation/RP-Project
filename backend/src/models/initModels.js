const {
  Users,
  Business,
  Carts,
  Orders,
  ProductsInOrder,
  Products,
  ProductsInCart,
  Roles,
  RolesCategories,
  ProductsCategories
} = require('./index');

const initModels = () => {
  Users.hasMany(Business, { as: 'companier', foreignKey: 'user_id' });
  Business.belongsTo(Users, { as: 'owner', foreignKey: 'user_id' });

  Users.belongsToMany(Business, { as: 'favBusinesses', through: 'business_favorites' });
  Business.belongsToMany(Users, { as: 'favUsers', through: 'business_favorites' });

  Users.hasOne(Carts, { as: 'shoppingCart', foreignKey: 'user_id' });
  Carts.belongsTo(Users, { as: 'owner', foreignKey: 'user_id' });

  Users.hasMany(Orders, { as: 'order', foreignKey: 'user_id' });
  Orders.belongsTo(Users, { as: 'user', foreignKey: 'user_id' });

  Roles.hasMany(Users, { as: 'user', foreignKey: 'role_id' });
  Users.belongsTo(Roles, { as: 'role', foreignKey: 'role_id' });

  Roles.belongsTo(RolesCategories, { as: 'category', foreignKey: 'category_id' });
  RolesCategories.hasMany(Roles, { as: 'roles', foreignKey: 'category_id' });

  Business.hasMany(Products, { as: 'products', foreignKey: 'business_id' });
  Products.belongsTo(Business, { as: 'business', foreignKey: 'business_id' });

  ProductsCategories.hasMany(Products, { as: 'listProducts', foreignKey: 'category_id' });
  Products.belongsTo(ProductsCategories, { as: 'category', foreignKey: 'category_id' });

  Carts.hasMany(ProductsInCart, { as: 'productoCart', foreignKey: 'cart_id' });
  ProductsInCart.belongsTo(Carts, { as: 'cart', foreignKey: 'cart_id' });

  Products.hasMany(ProductsInCart, { as: 'productsBuyng', foreignKey: 'product_id' });
  ProductsInCart.belongsTo(Products, { as: 'products', foreignKey: 'product_id' });

  Orders.hasMany(ProductsInOrder, { as: 'productOrder', foreignKey: 'order_id' });
  ProductsInOrder.belongsTo(Orders, { as: 'order', foreignKey: 'order_id' });

  Products.hasMany(ProductsInOrder, { as: 'orderProductsList', foreignKey: 'product_id' });
  ProductsInOrder.belongsTo(Products, { as: 'product', foreignKey: 'product_id' });
};

module.exports = initModels;
