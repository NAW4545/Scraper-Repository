var express = require('express');
var router = express.Router();
var path = require('path');
const asyncHandler = require('express-async-handler');
const Models = require('../sequelize');

/*To DO List */
// slos/dept/:dept_id - list programs by [department]
// slos/:prog_id/ - list of courses in [program]
// slos/:course_id - list all SLOs by [Course ID]


/* GET /slos listing. */
//Presents lists of Departments which link to /slos/:dept_id 
router.get('/', asyncHandler(async (req, res, next) => {
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

/* /slos/dept/:dept_id */
//Presents list of Programs associated with :dept_id  --- No Working, models need update
router.get('/dept/:dept_id', asyncHandler(async (req, res, next) => {
  const programs = await Models.programs.findAll({
    where: {
      dept_id: req.params.dept_id
    },
    attributes: [
      'dept_id',
      'prog_id',
      'prog_name'
      ],
    raw: true,
  });
  
  res.render('slos/deptView', {
    title: 'Select Program to view SLOS',
    metaDescription: 'SLO View by department',
    menuPath: req.originalPath,
    programs: programs,
  });
}));

// lists courses associated with chosen program,
// lists course slos under each listed course
router.get('/dept/prog/:prog_id', asyncHandler(async (req, res, next) => {
  const courses = await Models.courses.findAll({
    include: [{
      model: Models.programs,
      as: 'programs',
      required: true,
      where: {prog_id: req.params.prog_id}
    }],
    attributes: [
      'course_id',
      'course_name'
      ],
    raw: true,
  });
  const course_slos = await Models.course_slos.findAll({
    include: [{
      model: Models.courses,
      as: 'courses',
    }],
    attributes: [
      'course_id',
      'slo_id',
      'slo_desc'
      ],
    raw: true,
  });
  res.render('slos/progView', {
    title: 'Select Program to view SLOS',
    metaDescription: 'SLO View by department',
    menuPath: req.originalPath,
    course_slos: course_slos,
    courses: courses,
  });
}));


//We'll probably Delete this, but it was created so we could accept 
//changes to the database by the user 
/* GET /slos/change */
// router.get('/change', asyncHandler(async (req, res, next) => {
//   res.render('slos/change', {
//     title: 'Submit SLO Changes',
//     metaDescription: 'SLO Manager',
//     menuPath: req.originalPath,
//   });
// }));


module.exports = router;