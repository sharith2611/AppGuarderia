
const asistenciaModel = require('../models/asistenciaModel');

module.exports = {

    // CONSULTAR TODAS LAS ASISTENCIAS
    getAsistencias: (req, res) => {
        asistenciaModel.getAsistencias((err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            res.status(200).json({ data: result });
        });
    },

    // CONSULTAR ASISTENCIA POR ID
    getAsistenciaById: (req, res) => {
        const { id } = req.params;

        asistenciaModel.getAsistenciaById(id, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            if (result.length === 0) {
                res.status(404).json({
                    mensaje: 'Asistencia no encontrada'
                });
                return;
            }

            res.status(200).json({ data: result[0] });
        });
    },

    // REGISTRAR ASISTENCIA
    createAsistencia: (req, res) => {
        const datos = req.body;

        asistenciaModel.createAsistencia(datos, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            res.status(201).json({
                mensaje: 'Asistencia registrada correctamente',
                id: result.insertId
            });
        });
    },

    // ACTUALIZAR ASISTENCIA
    updateAsistencia: (req, res) => {
        const { id } = req.params;
        const datos = req.body;

        asistenciaModel.updateAsistencia(id, datos, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            if (result.affectedRows === 0) {
                res.status(404).json({
                    mensaje: 'Asistencia no encontrada'
                });
                return;
            }

            res.status(200).json({
                mensaje: 'Asistencia actualizada correctamente'
            });
        });
    },

    // ELIMINAR ASISTENCIA
    deleteAsistencia: (req, res) => {
        const { id } = req.params;

        asistenciaModel.deleteAsistencia(id, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            if (result.affectedRows === 0) {
                res.status(404).json({
                    mensaje: 'Asistencia no encontrada'
                });
                return;
            }

            res.status(200).json({
                mensaje: 'Asistencia eliminada correctamente'
            });
        });
    }

};
