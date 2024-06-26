'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('States_Cars', [{
      cod_status: 1,
      description_status: 'Disponible',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cod_status: 2,
      description_status: 'Mantenimiento',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cod_status: 3,
      description_status: 'Fuera de servicio',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('States_Cars', null, {})
  }
}
