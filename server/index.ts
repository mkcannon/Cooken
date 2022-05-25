const express = require ('express');
const dotenv = require('dotenv')
const cors = require('cors');
const router = require('./router.ts');

dotenv.config();
const app = express();

const PORT = process.env.SERVER_PORT;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
});