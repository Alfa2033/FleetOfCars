'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Cars extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Cars.belongsTo(models.States_Car, {
        foreignKey: 'state',
        as: 'stateInfo'
      })
    }
  }
  Cars.init({
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    trademark: {
      allowNull: false,
      type: DataTypes.STRING
    },
    model: {
      allowNull: false,
      type: DataTypes.STRING
    },
    year: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    license_plate: {
      allowNull: false,
      type: DataTypes.STRING
    },
    state: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'States_Cars',
        key: 'cod_status'
      }
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Cars'
  })
  return Cars
}
