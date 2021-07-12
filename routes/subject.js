var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/subject/:id', function(req, res, next) {
  res.send('req.params.id');
});

module.exports = router;
