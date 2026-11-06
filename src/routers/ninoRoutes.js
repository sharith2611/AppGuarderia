
const express = require('express');
const router = express.Router();

const ninoController = require('../controllers/ninoController');

// CONSULTAR TODOS LOS NIÑOS
router.get('/getNinos', ninoController.getNinos);

// CONSULTAR NIÑO POR ID
router.get('/getNinoById/:id', ninoController.getNinoById);

// REGISTRAR NIÑO
router.post('/createNino', ninoController.crearNino);

// ACTUALIZAR NIÑO
router.put('/updateNino/:id', ninoController.updateNino);

// ELIMINAR NIÑO
router.delete('/deleteNino/:id', ninoController.deleteNino);

module.exports = router;
