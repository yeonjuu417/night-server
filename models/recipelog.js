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
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
    },
    userId: DataTypes.INTEGER,
    foodName: DataTypes.STRING,
    link : DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'recipeLogs',
  });
//   recipeLog.associate = function(models) {
//     recipeLog.belongsTo(models.user, {
//       foreignKey: 'id'
//       })
// };
  return recipeLog;
};