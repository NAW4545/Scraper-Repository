var express = require('express');
var router = express.Router();
var path = require('path');
const asyncHandler = require('express-async-handler');
const Models = require('../sequelize');

/* GET /plos listing. */
router.get('/', asyncHandler(async (req, res, next) => {
  res.render('plos/plos', {
    title: 'PLOs',
    metaDescription: 'SLO Manager',
    menuPath: req.originalPath,
  });
}));

/* /plos/dept */

/* /plos/semester */

/* /plos/change */
router.get('/change', asyncHandler(async (req, res, next) => {
  res.render('plos/change', {
    title: 'Submit PLO Changes',
    metaDescription: 'SLO Manager',
    menuPath: req.originalPath,
  });
}));

module.exports = router;
