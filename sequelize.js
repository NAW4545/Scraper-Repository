const Sequelize = require('sequelize');

// Bring in the models:
//WIP THIS NEEDS DOING FOR ALL MODELS/TABLES
const departmentsModel = require('./models/departments');
const programsModel = require('./models/programs');

//Access DataBase - 
//WARNING - THIS CONFIGURATION WILL CONNECT TO THE MAIN DATABASE. TRY TO 
//CONNECT TO YOUR LOCAL DB IF YOU WILL BE MAKING CHANGES/TESTING OVERWRITES.
const sequelize = new Sequelize({
  host: 'csci36db.clmdetk42d9h.us-east-1.rds.amazonaws.com',
  username: 'admin',
  password: 'BigBadmin17',
  port: '3306',
  database: 'PLO',
  dialect: 'mysql',
  // A pool is good for multiple connections
  // pool: {
  //   max: 10,
  //   min: 0,
  //   acquire: 30000,
  //   idle: 10000
  // },
  // To remove deprecated warning
//   operatorsAliases: false,
  logging: false
});

//Generate and associate table objects 
//WIP THIS NEEDS DOING FOR ALL MODELS/TABLES
const departments = departmentsModel(sequelize, Sequelize);
const programs = programsModel(sequelize, Sequelize);
programs.associate(departments);
sequelize.sync()
.then(() => {
  console.log('Database & Tables Created Successfully!');
});


//Exports each table as module
//WIP THIS NEEDS DOING FOR ALL MODELS/TABLES
module.exports = {
  departments,
  programs,
};