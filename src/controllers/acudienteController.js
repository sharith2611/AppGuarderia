
const acudienteModel = require('../models/acudienteModel');

module.exports = {

    // CONSULTAR TODOS LOS ACUDIENTES
    getAcudientes: (req, res) => {
        acudienteModel.getAcudientes((err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            res.status(200).json({ data: result });
        });
    },

    // CONSULTAR ACUDIENTE POR ID
    getAcudienteById: (req, res) => {
        const { id } = req.params;

        acudienteModel.getAcudienteById(id, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            if (result.length === 0) {
                res.status(404).json({
                    mensaje: 'Acudiente no encontrado'
                });
                return;
            }

            res.status(200).json({ data: result[0] });
        });
    },

    // REGISTRAR ACUDIENTE
    createAcudiente: (req, res) => {
        const datos = req.body;

        acudienteModel.createAcudiente(datos, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            res.status(201).json({
                mensaje: 'Acudiente registrado correctamente',
                id: result.insertId
            });
        });
    },

    // ACTUALIZAR ACUDIENTE
    updateAcudiente: (req, res) => {
        const { id } = req.params;
        const datos = req.body;

        acudienteModel.updateAcudiente(id, datos, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            if (result.affectedRows === 0) {
                res.status(404).json({
                    mensaje: 'Acudiente no encontrado'
                });
                return;
            }

            res.status(200).json({
                mensaje: 'Acudiente actualizado correctamente'
            });
        });
    },

    // ELIMINAR ACUDIENTE
    deleteAcudiente: (req, res) => {
        const { id } = req.params;

        acudienteModel.deleteAcudiente(id, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            if (result.affectedRows === 0) {
                res.status(404).json({
                    mensaje: 'Acudiente no encontrado'
                });
                return;
            }

            res.status(200).json({
                mensaje: 'Acudiente eliminado correctamente'
            });
        });
    }

};
