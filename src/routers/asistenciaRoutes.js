
const express = require('express');
const router = express.Router();

const asistenciaController = require('../controllers/asistenciaController');

// CONSULTAR TODAS LAS ASISTENCIAS
router.get('/getAsistencias', asistenciaController.getAsistencias);

// CONSULTAR ASISTENCIA POR ID
router.get('/getAsistenciaById/:id', asistenciaController.getAsistenciaById);

// REGISTRAR ASISTENCIA
router.post('/createAsistencia', asistenciaController.createAsistencia);

// ACTUALIZAR ASISTENCIA
router.put('/updateAsistencia/:id', asistenciaController.updateAsistencia);

// ELIMINAR ASISTENCIA
router.delete('/deleteAsistencia/:id', asistenciaController.deleteAsistencia);

module.exports = router;
