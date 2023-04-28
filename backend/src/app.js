const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const db = require('./utils/database');
const hendleError = require('./middlewares/error.middleware');
const initModels = require('./models/initModels');
const { UserRoutes, ProductRoutes } = require('./routes');

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

app.use('/api/v1', UserRoutes);
app.use('/api/v1', ProductRoutes);

app.use(hendleError);

module.exports = app;
