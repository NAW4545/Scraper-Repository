module.exports = (sequelize, dataTypes) => {
    // Define our Departments Table Structure (Model)
    const plos = sequelize.define('plos', {
      // Our CategoryID, Types come from: https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types
      plo_id: {
           type: dataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true
       },
       plo_desc: {
           type: dataTypes.TEXT,
           allowNull: false
       },
       plo_last_eval: {
        type: dataTypes.DATE,
        allowNull: true
        },
        plo_next_eval: {
            type: dataTypes.DATE,
            allowNull: true
        },
       prog_id: {
           type: dataTypes.INTEGER,
           allowNull: false
       }
    });
    
    // Associate out Foreign Key
    
    plos.associate = (programs) => {
        plos.belongsTo(programs, {
            foreignKey: 'prog_id',
            as: 'programs'
        });
    };
    
    //Stop Sequelize from auto-pluralizing
    freezeTableName: true;
    
    // Return our Model
    return plos;
};