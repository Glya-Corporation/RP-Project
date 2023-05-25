const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const db = require('./utils/database');
const hendleError = require('./middlewares/error.middleware');
const initModels = require('./models/initModels');
const {
  AuthRoutes,
  BusinessRoutes,
  BusinessFavoritesRoutes,
  Cart,
  OrdersRoutes,
  ProductRoutes,
  ProductsCategoriesRoutes,
  ProductsInCartRoutes,
  RolesRoutes,
  RolesCategoriesRoutes,
  UserRoutes
} = require('./routes');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

initModels();

db.authenticate()
  .then(() => console.log('Authenticate complete'))
  .catch(error => console.log(error));

db.sync({ force: false })
  .then(() => console.log('Synchronized database'))
  .catch(error => console.log(error));

app.get('/', (req, res) => {
  res.status(200).json({
    name: 'API-UNIMARCKET',
    version: `${process.env.VERSION}`,
    url: `${process.env.HOST}`,
    documentation: `${process.env.HOST}/api/v1/documentation`
  });
});

app.use('/api/v1', AuthRoutes);
app.use('/api/v1', BusinessRoutes);
app.use('/api/v1', BusinessFavoritesRoutes);
app.use('/api/v1', Cart);
app.use('/api/v1', OrdersRoutes);
app.use('/api/v1', ProductRoutes);
app.use('/api/v1', ProductsCategoriesRoutes);
app.use('/api/v1', ProductsInCartRoutes);
app.use('/api/v1', RolesRoutes);
app.use('/api/v1', RolesCategoriesRoutes);
app.use('/api/v1', UserRoutes);

app.use(hendleError);

module.exports = app;
