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
//Presents a list of Departments, which generates link to PLO list
router.get('/dept', asyncHandler(async (req, res, next) => {
  const departments = await Models.departments.findAll({
    attributes: [
      'dept_id',
      'dept_name'
      ],
      raw: true,
      
  })
  res.render('plos/plosDept', {
    title: 'PLOs by Department',
    metaDescription: 'SLO Manager',
    menuPath: req.originalPath,
    departments: departments,
  });
}));

/* /plos/dept/:dept_id
//Presents list of SLOs associated with department chosen on /slos/dept

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
