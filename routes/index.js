var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get("http://priem2021.spmi.ru/list/public/data/naprBakalavrBudjet.json")
      .then(response => {
        console.log(response)
        res.render('index', { subjects: response.data })
      })
});

module.exports = router;
