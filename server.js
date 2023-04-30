const dotenv = require('dotenv');
const mongoose = require('mongoose');

const port = 3000;
const app = require('./app');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('Success connection!');
  })
  .catch((err) => console.log(`Connection error: `, err));

const server = app.listen(port, () => {
  console.log(`App started on port ${port}...`);
});

process.on('unhandledRejection', (err) => {
  console.log('Unhandled rejection!');
  console.log(err);
  server.close(() => {
    process.exit(1);
  });
});

process.on('uncaughtException', (err) => {
  console.log('Uncaught exception!');
  console.log(err.message);
  process.exit(1);
});
