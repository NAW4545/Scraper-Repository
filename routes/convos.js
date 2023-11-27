var express = require('express');
var router = express.Router();
var path = require('path');
const asyncHandler = require('express-async-handler');
const Models = require('../sequelize');

/*To Dos */
// convos/byDate - List all PLO Duiscussions by Date - Most recent (top) to oldest (bottom)
// convos/dept - List Departments
// convos/dept/:dept_id - list all discussions associated with [department]
// convos/prog - List Departments
// convos/prog/:dept_id - List all Programs in [department]
// convos/prog/:prog_id - List all discussions associated with that program


/* GET /convos listing. */
router.get('/', asyncHandler(async (req, res, next) => {
  res.render('convos/convos', {
    title: 'SLO Discussions',
    metaDescription: 'SLO Manager',
    menuPath: req.originalPath,
  });
}));

/* covos/bydate */
router.get('/date', asyncHandler(async (req, res, next) => {
  const discussions = await Models.discussions.findAll({
    attributes: [
      'disc_id',
      'disc_date',
      'disc_desc'
    ],
    raw: true,
  });
  res.render('convos/convosDate', {
    title: 'Disuccions by Program',
    metaDescription: 'Discussion Viewer',
    discussions: discussions,
  });
}));

router.get('/dates/:disc_date', asyncHandler(async (req, res, next) => {
  const dDate = await Models.discussions.findOne({
    where: {disc_date: req.params.disc_date},
    as: 'dDate',
    attributes: [
      'disc_id',
      'disc_date',
      'disc_desc'
    ],
    raw: true,
  });

  const discussions = await Models.discussions.findAll({
    where: {disc_date: req.params.disc_date},
    as: 'discussions',
    attributes: [
      'disc_id',
      'disc_date',
      'disc_desc'
    ],
    raw: true,
  });
  res.render('convos/dates', {
    title: 'Disuccions by Program',
    metaDescription: 'Discussion Viewer',
    discussions: discussions,
    dDate: dDate,
  });
}));

/* /convos/dept */
//Presents a list of Departments, which generates link to discussion list
router.get('/dept', asyncHandler(async (req, res, next) => {
  const departments = await Models.departments.findAll({
    attributes: [
      'dept_id',
      'dept_name'
      ],
      raw: true,
  });
  res.render('convos/convosDept', {
    title: 'Discussions by Department',
    metaDescription: 'SLO Manager',
    menuPath: req.originalPath,
    departments: departments,
  });
}));

// produces list of discussions based on previously selected department
router.get('/departments/:dept_id', asyncHandler(async (req, res, next) => {
  
  const departments = await Models.departments.findOne({
    where: {dept_id: req.params.dept_id},
    as: 'departments',
    attributes: [
      'dept_id',
      'dept_name'
      ],
      raw: true,
  });
  
  const discussions = await Models.discussions.findAll({
    include: [{
      model: Models.plos,
      as: 'plos',
      required: true,
      include: [{
        model: Models.programs,
        as: 'programs',
        where: {dept_id: req.params.dept_id}
      }]
    }],
    attributes: [
      'disc_id',
      'disc_date',
      'disc_desc'
    ],

  });
  res.render('convos/departments', {
    title: 'Disuccions by Program',
    metaDescription: 'Discussion Viewer',
    discussions: discussions,
    departments: departments,
  });
}));

/* /convos/prog */
//Presents a list of programs, with a generated URL link
//Should add functionality to group discussions by Program
router.get('/prog', asyncHandler(async (req, res, next) => {
  const programs = await Models.programs.findAll({
    attributes: [
      'prog_id',
      'prog_name',
      'dept_id'
      ],
      raw: true,
  });
  res.render('convos/convosProg', {
    title: 'Disuccions by Program',
    metaDescription: 'Discussion Viewer',
    programs: programs,
  });
}));

// produces list of discussions based on previously selected program
router.get('/programs/:prog_id', asyncHandler(async (req, res, next) => {
  const programs = await Models.programs.findOne({
    where: {prog_id: req.params.prog_id},
    as: 'programs',
    attributes: [
      'prog_id',
      'prog_name',
      'dept_id'
      ],
      raw: true,
  });
  const discussions = await Models.discussions.findAll({
    include: [{
      model: Models.plos,
      where: {
        prog_id: req.params.prog_id,
      }
    }],
    attributes: [
      'disc_id',
      'disc_date',
      'disc_desc'
    ],
   // raw: true, -----removing raw eliminates dup results in this case

  });
  res.render('convos/programs', {
    title: 'Disuccions by Program',
    metaDescription: 'Discussion Viewer',
    discussions: discussions,
    programs: programs,
  });
}));

module.exports = router;