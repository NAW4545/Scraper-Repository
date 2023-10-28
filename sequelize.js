const Sequelize = require('sequelize');

// Bring in the models:
//WIP THIS NEEDS DOING FOR ALL MODELS/TABLES
const departmentsModel = require('./models/departments');
const programsModel = require('./models/programs');

//Access DataBase - 
//WARNING - YOU WILL NEED TO CHANGE THIS TO YOUR LOCAL INFO EVERY TIME YOU PULL. 
//COPYING AND PASTING RECOMMENDED 
const sequelize = new Sequelize({
  hostname: '127.0.0.1',
  username: 'brody',
  password: 'Vault111',
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
//WIP THIS NEEDS DOING FOR ALL MODELS/TABLES
const departments = departmentsModel(sequelize, Sequelize);
const programs = programsModel(sequelize, Sequelize);
programs.associate(departments);
sequelize.sync({alter: true})
.then(() => {
  console.log('Database & Tables Created Successfully!');
});


//Exports each table as module
//WIP THIS NEEDS DOING FOR ALL MODELS/TABLES
module.exports = {
  departments,
  programs,
};