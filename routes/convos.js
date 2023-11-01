var express = require('express');
var router = express.Router();
var path = require('path');
const asyncHandler = require('express-async-handler');
const Models = require('../sequelize');

/* GET /convos listing. */
router.get('/', asyncHandler(async (req, res, next) => {
  res.render('convos', {
    title: 'SLO Conversations',
    metaDescription: 'SLO Manager',
    menuPath: req.originalPath,
  });
}));

/* convos/byDate */

/* /convos/dept */

/* /convos/prog */

module.exports = router;
