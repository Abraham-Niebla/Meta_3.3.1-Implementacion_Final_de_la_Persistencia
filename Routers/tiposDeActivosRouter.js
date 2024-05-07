const express = require('express');
const router = express.Router();

// Importando funciones para aplicar los métodos HTTP
const tiposDeActivosController = require("../Controllers/tiposDeActivosController");

// Métodos HTTP GET POST PUT PATCH y DELETE a partir de la ruta '/activos'
/*          MÉTODOS GET          */
router.get("/", tiposDeActivosController.getAll);
router.get("/id/:id", tiposDeActivosController.getById);

/*          MÉTODOS POST          */
router.post("/", tiposDeActivosController.saveElement);

/*          MÉTODOS PUT          */
router.put("/id/:id", tiposDeActivosController.replaceById);

/*          MÉTODOS PATCH          */
router.patch("/id/:id", tiposDeActivosController.updateById);

/*          MÉTODOS DELETE          */
router.delete("/id/:id", tiposDeActivosController.deleteId);

module.exports = router;