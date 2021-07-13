var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
    axios.all([
        axios.get("http://priem2021.spmi.ru/list/public/data/naprBakalavrBudjet.json"),
        axios.get("http://priem2021.spmi.ru/list/public/data/naprSpecialistBudjet.json")
    ]).then(results => {
        const subjects = results[0].data.concat(results[1].data)
        res.render('index', { subjects: subjects })
    })
});

module.exports = router;
