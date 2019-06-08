const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const mountRoutes = require('./routes');

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
mountRoutes(app);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Running on ${process.env.SERVER_PORT}`);
});
