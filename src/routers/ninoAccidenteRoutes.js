
const express = require('express');
const router = express.Router();

const ninoAccidenteController = require('../controllers/ninoAcudienteController');

// CONSULTAR TODAS LAS RELACIONES
router.get('/getNinoAccidentes', ninoAccidenteController.getNinoAccidentes);

// CONSULTAR RELACION POR ID
router.get('/getNinoAccidenteById/:id', ninoAccidenteController.getNinoAccidenteById);

// REGISTRAR RELACION
router.post('/createNinoAccidente', ninoAccidenteController.createNinoAccidente);

// ACTUALIZAR RELACION
router.put('/updateNinoAccidente/:id', ninoAccidenteController.updateNinoAccidente);

// ELIMINAR RELACION
router.delete('/deleteNinoAccidente/:id', ninoAccidenteController.deleteNinoAccidente);

module.exports = router;
