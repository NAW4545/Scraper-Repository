module.exports = (sequelize, dataTypes) => {
    // Define our Departments Table Structure (Model)
    const course_slos = sequelize.define('course_slos', {
      // Our CategoryID, Types come from: https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types
      slo_id: {
           type: dataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true
       },
       slo_desc: {
           type: dataTypes.TEXT,
           allowNull: false
       },
       course_id: {
           type: dataTypes.INTEGER,
           allowNull: false
       }
    });
    
    // Associate out Foreign Key
    
    course_slos.associate = (courses) => {
        course_slos.belongsTo(courses, {
            foreignKey: 'course_id',
            as: 'courses'
        });
    };
    
    //Stop Sequelize from auto-pluralizing
    freezeTableName: true;
    
    // Return our Model
    return course_slos;
};