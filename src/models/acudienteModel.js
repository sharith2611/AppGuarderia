
const db = require('../config/dbConfig');

const acudiente = {

    // CONSULTAR TODOS LOS ACUDIENTES
    getAcudientes: (callback) => {
        const sql = "SELECT id_acudiente, nombre, apellido, telefono, email, direccion, estado FROM acudiente";
        db.query(sql, callback);
    },

    // CONSULTAR ACUDIENTE POR ID
    getAcudienteById: (id, callback) => {
        const sql = "SELECT id_acudiente, nombre, apellido, telefono, email, direccion, estado FROM acudiente WHERE id_acudiente = ?";
        db.query(sql, [id], callback);
    },

    // REGISTRAR ACUDIENTE
    createAcudiente: (datos, callback) => {
        const sql = `INSERT INTO acudiente
        (nombre, apellido, telefono, email, direccion, estado)
        VALUES (?, ?, ?, ?, ?, ?)`;

        db.query(sql, [
            datos.nombre,
            datos.apellido,
            datos.telefono,
            datos.email,
            datos.direccion,
            datos.estado
        ], callback);
    },

    // ACTUALIZAR ACUDIENTE
    updateAcudiente: (id, datos, callback) => {
        const sql = `UPDATE acudiente SET
        nombre = ?,
        apellido = ?,
        telefono = ?,
        email = ?,
        direccion = ?,
        estado = ?
        WHERE id_acudiente = ?`;

        db.query(sql, [
            datos.nombre,
            datos.apellido,
            datos.telefono,
            datos.email,
            datos.direccion,
            datos.estado,
            id
        ], callback);
    },

    // ELIMINAR ACUDIENTE
    deleteAcudiente: (id, callback) => {
        const sql = "DELETE FROM acudiente WHERE id_acudiente = ?";
        db.query(sql, [id], callback);
    }

};

module.exports = acudiente;
