module.exports = (sequelize, dataTypes) => {
    // Define our Departments Table Structure (Model)
    const programs = sequelize.define('programs', {
      // Our CategoryID, Types come from: https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types
      PROG_ID: {
           type: dataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true
       },
       PROG_NAME: {
           type: dataTypes.STRING,
           allowNull: false
       },
       DEPT_ID: {
           type: dataTypes.INTEGER,
           allowNull: false
           
       }
    });
    
    // Associate out Foreign Key
    
    programs.associate = (departments) => {
        programs.belongsTo(departments, {
            foreignKey: 'DEPT_ID',
            as: 'departments'
        });
    };
    
    // programs.belongsTo(departments);
    
    //Stop Sequelize from auto-pluralizing
    freezeTableName: true;
    
    // Return our Model
    return programs;
};