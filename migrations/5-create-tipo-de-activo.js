"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("TipoDeActivos", {
            id_t: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            activo: {
                type: Sequelize.INTEGER, //Tipo de dato
                allowNull: false, //Poder dejarlo vacio
                unique: false, //No se podrán repetir valores
                references: {
                    model: "Activos",
                    key: "id_a",
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            },
            etiqueta: {
                type: Sequelize.INTEGER, //Tipo de dato
                allowNull: false, //Poder dejarlo vacio
                unique: false, //No se podrán repetir valores
                references: {
                    model: "Etiquetas",
                    key: "id_e",
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("TipoDeActivos");
    },
};
