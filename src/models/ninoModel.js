
const db = require('../config/dbConfig')
// se llama a la configuracion de la bd

class nino{

    getNinos(callback){
        const sql = "select id_nino, nombre, apellido, fecha_nacimiento, edad, tiposangre, tipo_identificacion, identificacion, nacionalidad, alergias, enfermedades, observaciones, estado from NINO";
        db.query(sql,callback);
    }

    getNinoById(id,callback){
        const sql = "select id_nino, nombre, apellido, fecha_nacimiento, edad, tiposangre, tipo_identificacion, identificacion, nacionalidad, alergias, enfermedades, observaciones, estado from NINO where id_nino = ?";
        db.query(sql,[id],callback);
    }

    crearNino(datos,callback){
        const sql = "insert into NINO set ?";
        db.query(sql,datos,callback);
    }

    actualizarNino(id,datos,callback){
        const sql = "update NINO set ? where id_nino = ?";
        db.query(sql,[datos,id],callback);
    }

    eliminarNino(id,callback){
        const sql = "update NINO set estado = 0 where id_nino = ?";
        db.query(sql,[id],callback);
    }

}

module.exports = new nino();
