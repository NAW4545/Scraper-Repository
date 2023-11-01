module.exports = (sequelize, dataTypes) => {
    // Define our Departments Table Structure (Model)
    const courses = sequelize.define('courses', {
      // Our CategoryID, Types come from: https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types
      course_id: {
           type: dataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true
       },
       course_name: {
           type: dataTypes.STRING,
           allowNull: false
       }
    });
    
    //Stop Sequelize from auto-pluralizing
    freezeTableName: true;
    
    // Return our Model
    return courses;
};