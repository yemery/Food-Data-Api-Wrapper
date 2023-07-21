const express = require('express');
const app = express();
const axios = require('axios');
const env = require("dotenv").config();

app.use(express.json());

app.get('/search-ing', async (req, res) => {
  const { ing } = req.body;
  
  const url = `https://api.edamam.com/api/food-database/v2/parser?app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`;

  const payload = {
    ingr: ing,
  };

  try {
    const response = await axios.get(url, payload);
    const data = response.data;
    // console.log(data);
    console.log(data.hints.length);
    res.json(data.hints);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(error.response ? error.response.status : 500).json({ error: 'Something went wrong' });
  }
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
