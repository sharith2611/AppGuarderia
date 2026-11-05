
const matriculaModel = require('../models/matriculaModel');

module.exports = {

    // CONSULTAR TODAS LAS MATRICULAS
    getMatriculas: (req, res) => {
        matriculaModel.getMatriculas((err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            res.status(200).json({ data: result });
        });
    },

    // CONSULTAR MATRICULA POR ID
    getMatriculaById: (req, res) => {
        const { id } = req.params;

        matriculaModel.getMatriculaById(id, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            if (result.length === 0) {
                res.status(404).json({
                    mensaje: 'Matrícula no encontrada'
                });
                return;
            }

            res.status(200).json({ data: result[0] });
        });
    },

    // REGISTRAR MATRICULA
    createMatricula: (req, res) => {
        const datos = req.body;

        matriculaModel.createMatricula(datos, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            res.status(201).json({
                mensaje: 'Matrícula registrada correctamente',
                id: result.insertId
            });
        });
    },

    // ACTUALIZAR MATRICULA
    updateMatricula: (req, res) => {
        const { id } = req.params;
        const datos = req.body;

        matriculaModel.updateMatricula(id, datos, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            if (result.affectedRows === 0) {
                res.status(404).json({
                    mensaje: 'Matrícula no encontrada'
                });
                return;
            }

            res.status(200).json({
                mensaje: 'Matrícula actualizada correctamente'
            });
        });
    },

    // ELIMINAR MATRICULA
    deleteMatricula: (req, res) => {
        const { id } = req.params;

        matriculaModel.deleteMatricula(id, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            if (result.affectedRows === 0) {
                res.status(404).json({
                    mensaje: 'Matrícula no encontrada'
                });
                return;
            }

            res.status(200).json({
                mensaje: 'Matrícula eliminada correctamente'
            });
        });
    }

};
