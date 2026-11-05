
const express = require('express');
const router = express.Router();

const matriculaController = require('../controllers/matriculaController');

// CONSULTAR TODAS LAS MATRICULAS
router.get('/getMatriculas', matriculaController.getMatriculas);

// CONSULTAR MATRICULA POR ID
router.get('/getMatriculaById/:id', matriculaController.getMatriculaById);

// REGISTRAR MATRICULA
router.post('/createMatricula', matriculaController.createMatricula);

// ACTUALIZAR MATRICULA
router.put('/updateMatricula/:id', matriculaController.updateMatricula);

// ELIMINAR MATRICULA
router.delete('/deleteMatricula/:id', matriculaController.deleteMatricula);

module.exports = router;
