"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("Etiquetas", [
            {
                id_e: 1,
                etiqueta: "Dispositivo Móvil",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id_e: 2,
                etiqueta: "Computadora",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id_e: 3,
                etiqueta: "Proyector",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id_e: 4,
                etiqueta: "Fuente",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id_e: 5,
                etiqueta: "Multímetro",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete("Etiquetas", null, {});
    },
};
