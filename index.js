const express = require('express');
const app = express();

require('dotenv').config()

const port = process.env.PORT || 3000;

const cors = require('cors');

const cookieParser = require('cookie-parser')

app.use(cors());
app.use(express.json())
app.use(cookieParser())

/* app.use('/route', router) */

app.get('/', (req, res) => {
    res.json('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});