var express = require('express');
var router = express.Router();
var path = require('path');
const asyncHandler = require('express-async-handler');
const Models = require('../sequelize');

/*To DO List */
// slos/dept/:dept_id - list programs by [department]
// slos/prog_id/ - list of courses in [program]
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
    raw: true,
  });
  
  res.render('slos/deptView', {
    title: 'Select Program to view SLOS',
    metaDescription: 'SLO View by department',
    menuPath: req.originalPath,
    programs: programs
  });
}));

/* /slos/prog/:prog_id */
//Presents list of courses associated with the program chosen on /slos/dept/:dept_id

/* /slos/course/:course_id */
//Presents list of SLOS associated with the course chosen on /slos/prog/:prog_id



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
