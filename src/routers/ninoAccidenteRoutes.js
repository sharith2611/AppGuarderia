
const express = require('express');
const router = express.Router();

const ninoAccidenteController = require('../controllers/ninoAcudienteController');

// CONSULTAR TODAS LAS RELACIONES
router.get('/getNinoAccidentes', ninoAccidenteController.getNinoAcudientes);

// CONSULTAR RELACION POR ID
router.get('/getNinoAccidenteById/:id', ninoAccidenteController.getNinoAcudienteById);

// REGISTRAR RELACION
router.post('/createNinoAccidente', ninoAccidenteController.crearNinoAcudiente);

// ACTUALIZAR RELACION
router.put('/updateNinoAccidente/:id', ninoAccidenteController.actualizarNinoAcudiente);

// ELIMINAR RELACION
router.delete('/deleteNinoAccidente/:id', ninoAccidenteController.eliminarNinoAcudiente);

module.exports = router;
