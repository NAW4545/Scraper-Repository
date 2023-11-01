module.exports = (sequelize, dataTypes) => {
    // Define our Departments Table Structure (Model)
    const departments = sequelize.define('departments', {
      // Our CategoryID, Types come from: https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types
      dept_id: {
           type: dataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true
       },
       dept_name: {
           type: dataTypes.STRING,
           allowNull: false
       }
    });
    
    //Associations
    // departments.hasMany(programs);
    
     //Stop Sequelize from auto-pluralizing
    freezeTableName: true;
    
    
    // Return our Model
    return departments;
};