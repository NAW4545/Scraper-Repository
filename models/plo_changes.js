module.exports = (sequelize, dataTypes) => {
    // Define our Departments Table Structure (Model)
    const plo_changes = sequelize.define('plo_changes', {
      // Our CategoryID, Types come from: https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types
      plo_change_id: {
           type: dataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true
       },
       plo_change_desc: {
           type: dataTypes.TEXT,
           allowNull: false
       },
       plo_change_date: {
        type: dataTypes.DATE,
        allowNull: false
        },
        plo_changed_by: {
            type: dataTypes.STRING,
            allowNull: false
        },
       plo_id: {
           type: dataTypes.INTEGER,
           allowNull: false
       }
    });
    
    // Associate out Foreign Key
    
    plo_changes.associate = (plos) => {
        plo_changes.belongsTo(plos, {
            foreignKey: 'plo_id',
            as: 'plos'
        });
    };
    
    //Stop Sequelize from auto-pluralizing
    freezeTableName: true;
    
    // Return our Model
    return plo_changes;
};