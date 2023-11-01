module.exports = (sequelize, dataTypes) => {
    // Define our Departments Table Structure (Model)
    const discussions = sequelize.define('discussions', {
      // Our CategoryID, Types come from: https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types
      disc_id: {
           type: dataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true
       },
       disc_date: {
           type: dataTypes.DATE,
           allowNull: false
       },
       disc_desc: {
            type: dataTypes.TEXT,
            allowNull: false
        }
    });
    
    //Stop Sequelize from auto-pluralizing
    freezeTableName: true;
    
    // Return our Model
    return discussions;
};