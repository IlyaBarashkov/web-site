const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  const date = new Date();
  const day = date.getDay();
  res.send({
    date: date.toDateString(),
    isWeekend: day === 0 || day === 6
  });
});

module.exports = router;
