
const ninoAccidenteModel = require('../models/ninoAcudienteModel');

module.exports = {

    // CONSULTAR TODAS LAS RELACIONES
    getNinoAcudientes: (req, res) => {
        ninoAccidenteModel.getNinoAcudientes((err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            res.status(200).json({ data: result });
        });
    },

    // CONSULTAR RELACION POR ID
    getNinoAcudienteById: (req, res) => {
        const { id } = req.params;

        ninoAccidenteModel.getNinoAcudienteById(id, (err, result) => {
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
    crearNinoAcudiente: (req, res) => {
        const datos = req.body;

        ninoAccidenteModel.crearNinoAcudiente(datos, (err, result) => {
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
    actualizarNinoAcudiente: (req, res) => {
        const { id } = req.params;
        const datos = req.body;

        ninoAccidenteModel.actualizarNinoAcudiente(id, datos, (err, result) => {
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
    eliminarNinoAcudiente: (req, res) => {
        const { id } = req.params;

        ninoAccidenteModel.eliminarNinoAcudiente(id, (err, result) => {
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
