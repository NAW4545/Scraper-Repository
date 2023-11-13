var express = require('express');
var router = express.Router();
var path = require('path');
const asyncHandler = require('express-async-handler');
const Models = require('../sequelize');

/* GET /convos listing. */
router.get('/', asyncHandler(async (req, res, next) => {
  res.render('convos/convos', {
    title: 'SLO Conversations',
    metaDescription: 'SLO Manager',
    menuPath: req.originalPath,
  });
}));

/* covos/bydate */

/* /covos/dept  */

/* /covos/prog  */

module.exports = router;