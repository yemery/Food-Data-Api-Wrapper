const express = require('express');
const app = express();
const env=require("dotenv").config();
app.use(express.json());



app.listen(5000, () => {
  console.log('Server is running ');
});

