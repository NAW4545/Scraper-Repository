var express = require('express');
var router = express.Router();
var path = require('path');
const asyncHandler = require('express-async-handler');
const Models = require('../sequelize');


/* GET /slos listing. */
//Presents menu for selecting whether to view SLOs by Department or Semester
router.get('/', asyncHandler(async (req, res, next) => {
  res.render('slos/slos', {
    title: 'SLOs',
    metaDescription: 'SLO Manager',
    menuPath: req.originalPath,
  });
}));

/* /slos/dept */
//Presents a list of Departments, which generates link to SLO list
router.get('/dept', asyncHandler(async (req, res, next) => {
  const departments = await Models.departments.findAll({
    attributes: [
      'dept_id',
      'dept_name'
      ],
      raw: true,
      
  })
  res.render('slos/slosDept', {
    title: 'SLOs by Department',
    metaDescription: 'SLO Manager',
    menuPath: req.originalPath,
    departments: departments,
  });
}));

//Presents list of SLOs associated with department chosen on /slos/dept
router.get('/slos/:dept_id', asyncHandler(async (req, res, next) => {
  const course_slo = await Models.course_slos.findAll({
    where: {
      course_id: req.params.dept_id
    },
    raw: true,
    // include: [{
    //   attributes: [],
    //   model: Models.courses,
    // }]
  });
  
  res.render('slos/deptView', {
    title: course_slo.course_id,
    metaDescription: 'SLO View by department',
    menuPath: req.originalPath,
    course_slo: course_slo
  });
}));


/* /slos/semester */

/* GET /slos/change */
router.get('/change', asyncHandler(async (req, res, next) => {
  res.render('slos/change', {
    title: 'Submit SLO Changes',
    metaDescription: 'SLO Manager',
    menuPath: req.originalPath,
  });
}));


module.exports = router;
