"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Activos", {
            id_a: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true, //Este atributo se define como la llave primaria
                type: Sequelize.INTEGER,
            },
            noSerie: {
                type: Sequelize.INTEGER, //Tipo de dato
                allowNull: false, //Poder dejarlo vacio
                unique: false, //No se podrán repetir valores
            },
            noInv: {
                type: Sequelize.INTEGER, //Tipo de dato
                allowNull: true, //Poder dejarlo vacio
                unique: true, //No se podrán repetir valores
            },
            desc: {
                type: Sequelize.STRING, //Tipo de dato
                allowNull: true, //Poder dejarlo vacio
                unique: false, //No se podrán repetir valores
            },
            responsable: {
                //Llave foranea
                type: Sequelize.INTEGER,
                references: {
                    model: "Responsables",
                    key: "id_r",
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            },
            ubicacion: {
                //Llave foranea
                type: Sequelize.INTEGER,
                references: {
                    model: "Ubicaciones",
                    key: "id_u",
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            },
            imagen: {
                type: Sequelize.BLOB, //Tipo de dato
                allowNull: true, //Poder dejarlo vacio
                unique: false, //No se podrán repetir valores
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
        await queryInterface.dropTable("Activos");
    },
};
