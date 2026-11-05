
const db = require('../config/dbConfig')
// se llama a la configuracion de la bd

class ninoAcudiente{

    getNinoAcudientes(callback){
        const sql = "select id_nino_accidente, id_nino, id_acudiente, parentesco, es_principal, sn_recoge, estado from NINO_ACCIDENTE";
        db.query(sql,callback);
    }

    getNinoAcudienteById(id,callback){
        const sql = "select id_nino_accidente, id_nino, id_acudiente, parentesco, es_principal, sn_recoge, estado from NINO_ACCIDENTE where id_nino_accidente = ?";
        db.query(sql,[id],callback);
    }

    crearNinoAcudiente(datos,callback){
        const sql = "insert into NINO_ACCIDENTE set ?";
        db.query(sql,datos,callback);
    }

    actualizarNinoAcudiente(id,datos,callback){
        const sql = "update NINO_ACCIDENTE set ? where id_nino_accidente = ?";
        db.query(sql,[datos,id],callback);
    }

    eliminarNinoAcudiente(id,callback){
        const sql = "update NINO_ACCIDENTE set estado = 0 where id_nino_accidente = ?";
        db.query(sql,[id],callback);
    }

}

module.exports = new ninoAcudiente();
