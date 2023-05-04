
const { Distributor, Wholesalers, Users } = require("./index");

const initModels = () => {
    
    Users.hasMany(Business, { as: 'negocios', foreignKey: 'user_id' });
    Business.belongsTo(Users, { as: 'propietarios', foreignKey: 'user_id' });

    Users.belongsToMany(Business, { as: 'negocios favoritos', through: 'business_favorites' });
    Business.belongsToMany(Users, { as: 'usuarios favoritos', through: 'business_favorites' });

    Users.hasOne(Cart, { as: 'carro de compras', foreignKey: 'user_id' });
    Cart.belongsTo(Users, { as: 'propietario', foreignKey: 'user_id' });

    Users.hasMany(Orders, { as: 'ordenes', foreignKey: 'user_id' });
    Orders.belongsTo(Users, { as: 'usuario', foreignKey: 'user_id' });
    
    Roles.hasMany(Users, { as: 'usuarios', foreignKey: 'role_id' });
    Users.belongsTo(Roles, { as: 'rol', foreignKey: 'role_id' });

    Roles.belongsTo(Item, {as: 'rubro', foreignKey: 'type_id'});
    Item.hasMany(Roles, { as: 'roles', foreignKey: 'type_id' });

};

module.exports = initModels;
