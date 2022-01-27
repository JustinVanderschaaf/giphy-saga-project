require('dotenv').config()
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios')

router.get('/', (req, res) => {
  // return all categories
  const queryText = `SELECT * FROM category ORDER BY name ASC`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

router.get('/search/:id', (req, res) => {
  console.log('made it to server', req.params.id);
  axios({
    method: 'GET',
    url: 'http://api.giphy.com/v1/gifs/search',
    params: {
      api_key: process.env.GIPHY_API_KEY,
      q: req.params.id
    }
  })
  .then((apiRes) => {
    res.send(apiRes.data)
  })
  .catch((err) => {
    console.log('request failed', err);
    res.sendStatus(500);
    
  })
})


module.exports = router;
