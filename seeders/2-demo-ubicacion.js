"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("Ubicaciones", [
            {
                id_u: 1,
                desc: "Laboratorio A de Computación",
                imagen: "",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id_u: 2,
                desc: "Laboratorio B de Computación",
                imagen: "",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id_u: 3,
                desc: "Laboratorio C de Computación",
                imagen: "",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id_u: 4,
                desc: "Laboratorio D de Computación",
                imagen: "",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id_u: 5,
                desc: "Laboratorio E de Computación",
                imagen: "",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id_u: 10,
                desc: "Almacén de Computación",
                imagen: "",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete("Ubicaciones", null, {});
    },
};
