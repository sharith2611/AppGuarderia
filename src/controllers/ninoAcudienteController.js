
const ninoAccidenteModel = require('../models/ninoModel');

module.exports = {

    // CONSULTAR TODAS LAS RELACIONES
    getNinoAccidentes: (req, res) => {
        ninoAccidenteModel.getNinoAccidentes((err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            res.status(200).json({ data: result });
        });
    },

    // CONSULTAR RELACION POR ID
    getNinoAccidenteById: (req, res) => {
        const { id } = req.params;

        ninoAccidenteModel.getNinoAccidenteById(id, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            if (result.length === 0) {
                res.status(404).json({
                    mensaje: 'Relación niño-acudiente no encontrada'
                });
                return;
            }

            res.status(200).json({ data: result[0] });
        });
    },

    // REGISTRAR RELACION
    createNinoAccidente: (req, res) => {
        const datos = req.body;

        ninoAccidenteModel.createNinoAccidente(datos, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            res.status(201).json({
                mensaje: 'Relación registrada correctamente',
                id: result.insertId
            });
        });
    },

    // ACTUALIZAR RELACION
    updateNinoAccidente: (req, res) => {
        const { id } = req.params;
        const datos = req.body;

        ninoAccidenteModel.updateNinoAccidente(id, datos, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            if (result.affectedRows === 0) {
                res.status(404).json({
                    mensaje: 'Relación no encontrada'
                });
                return;
            }

            res.status(200).json({
                mensaje: 'Relación actualizada correctamente'
            });
        });
    },

    // ELIMINAR RELACION
    deleteNinoAccidente: (req, res) => {
        const { id } = req.params;

        ninoAccidenteModel.deleteNinoAccidente(id, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            if (result.affectedRows === 0) {
                res.status(404).json({
                    mensaje: 'Relación no encontrada'
                });
                return;
            }

            res.status(200).json({
                mensaje: 'Relación eliminada correctamente'
            });
        });
    }

};
