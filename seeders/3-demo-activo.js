"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("Activos", [
            {
                id_a: 1,
                noSerie: 123,
                noInv: 321,
                desc: "Computadora Marca Dell",
                responsable: 3,
                ubicacion: 1,
                imagen: "",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id_a: 2,
                noSerie: 456,
                noInv: 654,
                desc: "Proyector Marca Epson",
                responsable: 1,
                ubicacion: 2,
                imagen: "",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id_a: 3,
                noSerie: 789,
                noInv: 987,
                desc: "Fuente de poder DC variable",
                responsable: 2,
                ubicacion: 4,
                imagen: "",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id_a: 4,
                noSerie: 159,
                noInv: 951,
                desc: "Laptop marca Lenovo para préstamo",
                responsable: 4,
                ubicacion: 10,
                imagen: "",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id_a: 5,
                noSerie: 357,
                noInv: 753,
                desc: "Multímetro marca Fluke",
                responsable: 2,
                ubicacion: 5,
                imagen: "",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete("Activos", null, {});
    },
};
