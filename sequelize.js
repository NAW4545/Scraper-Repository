const Sequelize = require('sequelize');

// Bring in the models:
//WIP THIS NEEDS DOING FOR ALL MODELS/TABLES
const departmentsModel = require('./models/departments');
const programsModel = require('./models/programs');
const plosModel = require('./models/plos');
const plo_changesModel = require('./models/plo_changes');
const discussionsModel = require('./models/discussions');
const coursesModel = require('./models/courses');
const course_slosModel = require('./models/course_slos');


//Access DataBase - 
//WARNING - YOU WILL NEED TO CHANGE THIS TO YOUR LOCAL INFO EVERY TIME YOU PULL. 
//COPYING AND PASTING RECOMMENDED 
const sequelize = new Sequelize({
  host: 'csci36db.clmdetk42d9h.us-east-1.rds.amazonaws.com',
  database: 'PLO',
  username: 'noah',  
  password: 'password',  
  port: '3306',
  dialect: 'mysql',
  // A pool is good for multiple connections
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  // To remove deprecated warning
//   operatorsAliases: false,
  logging: false
});

//Generate and associate table objects 
const departments = departmentsModel(sequelize, Sequelize);
const programs = programsModel(sequelize, Sequelize);
const plos = plosModel(sequelize, Sequelize);
const plo_changes = plo_changesModel(sequelize, Sequelize);
const discussions = discussionsModel(sequelize, Sequelize);
const courses = coursesModel(sequelize, Sequelize);
const course_slos = course_slosModel(sequelize, Sequelize);


programs.associate(departments);
plos.associate(programs);
plo_changes.associate(plos);
course_slos.associate(courses);
programs.belongsToMany(courses, {through: 'prog_courses'});
courses.belongsToMany(programs, {through: 'prog_courses'});
plos.belongsToMany(discussions, {through: 'plo_discussions'});
discussions.belongsToMany(plos, {through: 'plo_discussions'});


sequelize.sync()
.then(() => {
  console.log('Database & Tables Created Successfully!');
});


//Exports each table as module
module.exports = {
  departments,
  programs,
  plos,
  plo_changes,
  discussions,
  courses,
  course_slos,
};