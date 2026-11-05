
const ninoModel = require('../models/ninoModel');

module.exports = {

    // CONSULTAR TODOS LOS NIÑOS
    getNinos: (req, res) => {
        ninoModel.getNinos((err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            res.status(200).json({ data: result });
        });
    },

    // CONSULTAR NIÑO POR ID
    getNinoById: (req, res) => {
        const { id } = req.params;

        ninoModel.getNinoById(id, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            if (result.length === 0) {
                res.status(404).json({
                    mensaje: 'Niño no encontrado'
                });
                return;
            }

            res.status(200).json({ data: result[0] });
        });
    },

    // REGISTRAR NIÑO
    createNino: (req, res) => {
        const datos = req.body;

        ninoModel.createNino(datos, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            res.status(201).json({
                mensaje: 'Niño registrado correctamente',
                id: result.insertId
            });
        });
    },

    // ACTUALIZAR NIÑO
    updateNino: (req, res) => {
        const { id } = req.params;
        const datos = req.body;

        ninoModel.updateNino(id, datos, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            if (result.affectedRows === 0) {
                res.status(404).json({
                    mensaje: 'Niño no encontrado'
                });
                return;
            }

            res.status(200).json({
                mensaje: 'Niño actualizado correctamente'
            });
        });
    },

    // ELIMINAR NIÑO
    deleteNino: (req, res) => {
        const { id } = req.params;

        ninoModel.deleteNino(id, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            if (result.affectedRows === 0) {
                res.status(404).json({
                    mensaje: 'Niño no encontrado'
                });
                return;
            }

            res.status(200).json({
                mensaje: 'Niño eliminado correctamente'
            });
        });
    }

};
