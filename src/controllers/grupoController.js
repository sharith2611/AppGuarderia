
const grupoModel = require('../models/grupoModel');

module.exports = {

    // CONSULTAR TODOS LOS GRUPOS
    getGrupos: (req, res) => {
        grupoModel.getGrupos((err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            res.status(200).json({ data: result });
        });
    },

    // CONSULTAR GRUPO POR ID
    getGrupoById: (req, res) => {
        const { id } = req.params;

        grupoModel.getGrupoById(id, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            if (result.length === 0) {
                res.status(404).json({
                    mensaje: 'Grupo no encontrado'
                });
                return;
            }

            res.status(200).json({ data: result[0] });
        });
    },

    // REGISTRAR GRUPO
    createGrupo: (req, res) => {
        const datos = req.body;

        grupoModel.createGrupo(datos, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            res.status(201).json({
                mensaje: 'Grupo registrado correctamente',
                id: result.insertId
            });
        });
    },

    // ACTUALIZAR GRUPO
    updateGrupo: (req, res) => {
        const { id } = req.params;
        const datos = req.body;

        grupoModel.updateGrupo(id, datos, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            if (result.affectedRows === 0) {
                res.status(404).json({
                    mensaje: 'Grupo no encontrado'
                });
                return;
            }

            res.status(200).json({
                mensaje: 'Grupo actualizado correctamente'
            });
        });
    },

    // ELIMINAR GRUPO
    deleteGrupo: (req, res) => {
        const { id } = req.params;

        grupoModel.deleteGrupo(id, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            if (result.affectedRows === 0) {
                res.status(404).json({
                    mensaje: 'Grupo no encontrado'
                });
                return;
            }

            res.status(200).json({
                mensaje: 'Grupo eliminado correctamente'
            });
        });
    }

};
