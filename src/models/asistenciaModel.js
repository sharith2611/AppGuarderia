
const db = require('../config/dbConfig')
// se llama a la configuracion de la bd

const asistencia = {

    getAsistencias: (callback) => {
        const sql = "select id_asistencia, id_nino, fecha, estado from asistencia";
        db.query(sql, callback);
    },

    getAsistenciaById: (id, callback) => {
        const sql = "select id_asistencia, id_nino, fecha, estado from ASISTENCIA where id_asistencia = ?";
        db.query(sql, [id], callback);
    },

    crearAsistencia: (datos, callback) => {
        const sql = "insert into ASISTENCIA set ?";
        db.query(sql, datos, callback);
    },

    actualizarAsistencia: (id, datos, callback) => {
        const sql = "update ASISTENCIAset ? where id_asistencia = ?";
        db.query(sql, [datos, id], callback);
    },

    eliminarAsistencia: (id, callback) => {
        const sql = "delete from ASISTENCIA where id_asistencia = ?";
        db.query(sql, [id], callback);
    }

}

module.exports = asistencia;
