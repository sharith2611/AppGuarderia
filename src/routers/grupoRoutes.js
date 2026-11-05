
const express = require('express');
const router = express.Router();

const grupoController = require('../controllers/grupoController');

// CONSULTAR TODOS LOS GRUPOS
router.get('/getGrupos', grupoController.getGrupos);

// CONSULTAR GRUPO POR ID
router.get('/getGrupoById/:id', grupoController.getGrupoById);

// REGISTRAR GRUPO
router.post('/createGrupo', grupoController.createGrupo);

// ACTUALIZAR GRUPO
router.put('/updateGrupo/:id', grupoController.updateGrupo);

// ELIMINAR GRUPO
router.delete('/deleteGrupo/:id', grupoController.deleteGrupo);

module.exports = router;
