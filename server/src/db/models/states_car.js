/* eslint-disable camelcase */
'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class States_Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      States_Car.hasOne(models.Cars, {
        foreignKey: 'state',
        as: 'statusCar'
      })
    }
  }
  States_Car.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    cod_status: {
      allowNull: false,
      unique: true,
      type: DataTypes.INTEGER
    },
    description_status: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'States_Car'
  })
  return States_Car
}
