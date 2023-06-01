const db = require('../utils/database');
const initModels = require('../models/initModels');
const { RolesCategories, Users } = require('../models');
const { Roles } = require('../models');

initModels();

const roleCategories = [{ name: 'alimenticio' }];

const roles = [
  {
    name: 'Mayorista o Fabricante',
    categoryId: 1,
    description:
      'Un mayorista o fabricante es una entidad que produce, fabrica o distribuye bienes en grandes cantidades. Su objetivo principal es abastecer a minoristas, comerciantes u otros negocios en lugar de vender directamente a los consumidores finales.'
  },
  {
    name: 'Proveedor',
    categoryId: 1,
    description:
      'Un proveedor es una persona o empresa que suministra productos a otras empresas o consumidores. Su función es proveer a sus clientes con los productos necesarios para satisfacer sus necesidades. Los proveedores pueden tener una variedad de productos y su relación con los clientes se basa en contratos comerciales o acuerdos de suministro.'
  },
  {
    name: 'Comerciante',
    categoryId: 1,
    description:
      'Un comerciante es un intermediario que se dedica a la compra y venta de bienes y servicios con el fin de obtener beneficios. Su papel es adquirir productos de los proveedores o fabricantes y revenderlos a los clientes finales, ya sea en una tienda física o en línea.'
  },
  {
    name: 'Cliente final',
    categoryId: 1,
    description:
      'El cliente final o consumidor final es la persona u organización que compra y utiliza un producto o servicio para su propio consumo. Representa el último eslabón en la cadena de distribución y toma decisiones de compra basadas en sus necesidades y preferencias. Los clientes finales utilizan directamente los productos que adquieren.'
  }
];

const users = [{}, {}];

db.sync({ force: true })
  .then(() => {
    console.log('Iniciando la plantación de Información');

    RolesCategories.bulkCreate(roleCategories);

    setTimeout(() => Roles.bulkCreate(roles), 1000);

    //setTimeout(() => users.forEach(user => Users.create(user)), 2000);
  })
  .then(() => console.log('Implantation complete'))
  .catch(error => console.log(error));
