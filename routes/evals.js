var express = require('express');
var router = express.Router();
var path = require('path');
const asyncHandler = require('express-async-handler');
const Models = require('../sequelize');
const { Op } = require('sequelize') ;

/*To DO List */
// evals/ - Semester selection (drop down from convos menu)
// evals/:semester - List all PLOs that need evaluation during that semester

/* GET evals/ listing. */ 
//Displays Drop-Down menu for selecting a semester
//OLD NEEDS RE-WRITE
router.get('/', asyncHandler(async (req, res, next) => {
  res.render('evals/evals', {
    title: 'evals',
    metaDescription: 'evals viewer',
    menuPath: req.originalPath,
  });
}));

/*GET evals/:semester */
//Displays a list of all PLOs that need to be evaluated for selected semester, grouped by Department
//NEEDS RE-WRITE
router.get('/semester/:semester', asyncHandler(async (req, res, next) => {

  var semester;
  
    if (req.params.semester == '2023winter') {
    semester = ['2023-01-01', '2023-01-20'];
   } else if (req.params.semester == '2023spring') {
    semester = ['2023-01-20', '2023-05-24'];
  } else if (req.params.semester == '2023summer') {
    semester = ['2023-06-10', '2023-07-22'];
  } else if (req.params.semester == '2023fall') {
    semester = ['2023-08-19', '2023-12-16'];
  } else if (req.params.semester == '2024winter') {
    semester = ['2024-01-01', '2024-01-20'];
  } else if (req.params.semester == '2024spring') {
    semester = ['2024-01-20', '2024-05-24'];
  } else if (req.params.semester == '2024summer') {
    semester = ['2024-06-10', '2024-07-22'];
  } else if (req.params.semester == '2024fall') {
    semester = ['2024-08-19', '2024-12-16'];
  } else if (req.params.semester == '2025winter') {
    semester = ['2025-01-01', '2025-01-20'];
  } else if (req.params.semester == '2025spring') {
    semester = ['2025-01-20', '2025-05-24'];
  } else if (req.params.semester == '2025summer') {
    semester = ['2025-06-10', '2025-07-22'];
  } else if (req.params.semester == '2025fall') {
    semester = ['2025-08-19', '2025-12-16'];
  } else if (req.params.semester == '2026winter') {
    semester = ['2026-01-01', '2026-01-20'];
  } else if (req.params.semester == '2026spring') {
    semester = ['2026-01-20', '2026-05-24'];
  } else if (req.params.semester == '2026summer') {
    semester = ['2026-06-10', '2026-07-22'];
  } else if (req.params.semester == '2026fall') {
    semester = ['2026-08-19', '2026-12-16'];
  } 
  
  const plos = await Models.plos.findAll({
    where: {plo_next_eval: {[Op.between]: semester}},
    attributes: [
      'plo_id',
      'plo_desc',
      'plo_last_eval',
      'plo_next_eval',
      'prog_id'
      ],
      raw: true,
  });

  res.render('evals/semester', {
    title: 'semester',
    metaDescription: 'Eval Viewer',
    menuPath: req.originalPath,
    plos: plos,
  });
}));


module.exports = router;