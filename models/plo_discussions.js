module.exports = (sequelize, dataTypes) => {
    // Define our Departments Table Structure (Model)
    const plo_discussions = sequelize.define('plo_discussions', {});
    
    plo_id.belongsToMany(plos, { through: plo_discussions });
    disc_id.belongsToMany(discussions, { through: plo_discussions });
    
    //Stop Sequelize from auto-pluralizing
    freezeTableName: true;
    
    // Return our Model
    return plo_discussions;
};