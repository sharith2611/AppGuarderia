
const db = require('../config/dbConfig')
// se llama a la configuracion de la bd

class grupo{

    getGrupos(callback){
        const sql = "select id_grupo, nombre_grupo, edad_minima, edad_maxima, estado from GRUPO";
        db.query(sql,callback);
    }

    getGrupoById(id,callback){
        const sql = "select id_grupo, nombre_grupo, edad_minima, edad_maxima, estado from GRUPO where id_grupo = ?";
        db.query(sql,[id],callback);
    }

    createGrupo(datos,callback){
        const sql = "insert into GRUPO set ?";
        db.query(sql,datos,callback);
    }

    updateGrupo(id,datos,callback){
        const sql = "update GRUPO set ? where id_grupo = ?";
        db.query(sql,[datos,id],callback);
    }

    deleteGrupo(id,callback){
        const sql = "update GRUPO set estado = 0 where id_grupo = ?";
        db.query(sql,[id],callback);
    }

}

module.exports = new grupo();
