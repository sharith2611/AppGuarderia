
const express = require('express');
const router = express.Router();

const acudienteController = require('../controllers/acudienteController');

// CONSULTAR TODOS LOS ACUDIENTES
router.get('/getAcudientes', acudienteController.getAcudientes);

// CONSULTAR ACUDIENTE POR ID
router.get('/getAcudienteById/:id', acudienteController.getAcudienteById);

// REGISTRAR ACUDIENTE
router.post('/createAcudiente', acudienteController.createAcudiente);

// ACTUALIZAR ACUDIENTE
router.put('/updateAcudiente/:id', acudienteController.updateAcudiente);

// ELIMINAR ACUDIENTE
router.delete('/deleteAcudiente/:id', acudienteController.deleteAcudiente);

module.exports = router;
