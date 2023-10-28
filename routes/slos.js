var express = require('express');
var router = express.Router();
var path = require('path');
const asyncHandler = require('express-async-handler');
//const Models = require('../sequelize');

/* GET /slos listing. */
router.get('/', asyncHandler(async (req, res, next) => {
  res.render('slos', {
    title: 'SLOs',
    metaDescription: 'SLO Manager',
    menuPath: req.originalPath,
  });
}));

module.exports = router;
