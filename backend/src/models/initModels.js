const {
  Users,
  Business,
  Carts,
  Orders,
  ProductsInOrder,
  Products,
  ProductsInCart
} = require('./index');

const initModels = () => {
  Users.hasMany(Business, { as: 'negocios', foreignKey: 'user_id' });
  Business.belongsTo(Users, { as: 'propietarios', foreignKey: 'user_id' });

  /* Un usuario puede tener muchos negocios favoritos, y un negocio puede ser favorito de muchos usuarios */

  Users.belongsToMany(Business, { as: 'negocios favoritos', through: 'business_favorites' });
  Business.belongsToMany(Users, { as: 'usuarios favoritos', through: 'business_favorites' });

  Users.hasOne(Carts, { as: 'carro de compras', foreignKey: 'user_id' });
  Carts.belongsTo(Users, { as: 'propietario', foreignKey: 'user_id' });

  Users.hasMany(Orders, { as: 'ordenes', foreignKey: 'user_id' });
  Orders.belongsTo(Users, { as: 'usuario', foreignKey: 'user_id' });

  Roles.hasMany(Users, { as: 'usuarios', foreignKey: 'role_id' });
  Users.belongsTo(Roles, { as: 'rol', foreignKey: 'role_id' });

  Roles.belongsTo(Item, { as: 'rubro', foreignKey: 'type_id' });
  Item.hasMany(Roles, { as: 'roles', foreignKey: 'type_id' });

  Business.hasMany(Products, { as: 'productos', foreignKey: 'business_id' });
  Products.belongsTo(Business, { as: 'negocio', foreignKey: 'business_id' });

  Carts.hasMany(ProductsInCart, { as: 'producto en cart', foreignKey: 'cart_id' });
  ProductsInCart.belongsTo(Carts, { as: 'cart', foreignKey: 'cart_id' });

  /* Una orden tiene muchos productos */
  Orders.hasMany(ProductsInOrder, { as: 'producto en orden', foreignKey: 'order_id' });
  ProductsInOrder.belongsTo(Orders, { as: 'order', foreignKey: 'order_id' });

  /* Un producto en orden pertenece a un producto, y un producto puede tenere muchos "P.I.O." */
  Products.hasMany(ProductsInOrder, { as: 'ordenen de productos', foreignKey: 'product_id' });
  ProductsInOrder.belongsTo(Products, { as: 'productos', foreignKey: 'product_id' });
};

module.exports = initModels;
