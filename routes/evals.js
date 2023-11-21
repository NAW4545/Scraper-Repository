var express = require('express');
var router = express.Router();
var path = require('path');
const asyncHandler = require('express-async-handler');
const Models = require('../sequelize');

/*To DO List */
// evals/ - Semester selection (drop down from convos menu)
// evals/:semester - List all PLOs that need evaluation during that semester

/* GET evals/ listing. */ 
//Displays Drop-Down menu for selecting a semester
//OLD NEEDS RE-WRITE
router.get('/', asyncHandler(async (req, res, next) => {
  res.render('plos/plos', {
    title: 'PLOs',
    metaDescription: 'SLO Manager',
    menuPath: req.originalPath,
  });
}));

/*GET evals/:semester */
//Displays a list of all PLOs that need to be evaluated for selected semester, grouped by Department
//NEEDS RE-WRITE


module.exports = router;
