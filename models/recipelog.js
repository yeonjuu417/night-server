'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class recipeLog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  recipeLog.init({
    userId: DataTypes.INT,
    foodName: DataTypes.STRING,
    link : DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'recipeLog',
  });
  recipeLog.associate = function(models) {
    recipeLog.belongsTo(models.user, {
      foreignKey: 'id'
      })
};
  return recipeLog;
};