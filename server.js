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

app.listen(port, () => {
  console.log(`App started on port ${port}...`);
});
