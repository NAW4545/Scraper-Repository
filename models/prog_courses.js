module.exports = (sequelize, dataTypes) => {
    // Define our Departments Table Structure (Model)
    const prog_courses = sequelize.define('prog_courses', {});
    
    prog_id.belongsToMany(programs, { through: prog_courses });
    course_id.belongsToMany(courses, { through: prog_courses });
    
    //Stop Sequelize from auto-pluralizing
    freezeTableName: true;
    
    // Return our Model
    return prog_courses;
};