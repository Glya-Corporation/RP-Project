
const { FinalClient, Merchant, Distributor, Wholesalers } = require("./index");

const initModels = () => {
    // users aren't limited to buy in wholesalers
    Users.belongsToMany(Merchants, { as: "final_client", primaryKey: "id"});
    Users.hasMany(Wholesalers, { as: "retail_customer", primaryKey: "id"});


    // the distributors can not sell to final client 
    Distibutor.hasMany(Merchants, { as: "retail_customer", primaryKey: "id"});
    Distibutor.hasMany(Wholesalers, { as: "dealer_customer", primaryKey: "id"});

    // Wholesalers can sell for all customers
    Wholesalers.hasMany(Users, { as: "final_client", primaryKey: "id" });
    Wholesalers.hasMany(Merchants, { as: "client_merchant", primaryKey: "id" });
    Wholesalers.hasMany(Distributor, { as: "client_distributor", primaryKey: "id" });

    //relation with products
    Products.belongsTo(Users, { as: "choice_product", primaryKey: "id" });
    Products.belongsTo(Merchants, { as: "product_inventory", primaryKey: "id" });
    Products.belongsTo(Distributor, { as: "product_catalog", primaryKey: "id" });

    Users.hasOne(Carts, { as: "buyer", foreignKey: "user_id" });
    Carts.belongsTo(Users, { as: "cart_full", primaryKey: "id" });
  
    Orders.belongsTo(Users, { as: "cart_full", primaryKey: "id" });
    Users.hasMany(Orders, { as: "orders", foreignKey: "user_id" });


    Users.belongsToMany(Products, { through: "product" });
};

module.exports = initModels;
