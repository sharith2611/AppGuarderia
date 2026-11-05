
const db = require('../config/dbConfig')
// se llama a la configuracion de la bd

class grupo{

    getGrupos(callback){
        const sql = "select id_grupo, nombre_grupo, edad_minima, edad_maxima, estado from grupo";
        db.query(sql,callback);
    }

    getGrupoById(id,callback){
        const sql = "select id_grupo, nombre_grupo, edad_minima, edad_maxima, estado from grupo where id_grupo = ?";
        db.query(sql,[id],callback);
    }

    crearGrupo(datos,callback){
        const sql = "insert into grupo set ?";
        db.query(sql,datos,callback);
    }

    actualizarGrupo(id,datos,callback){
        const sql = "update grupo set ? where id_grupo = ?";
        db.query(sql,[datos,id],callback);
    }

    eliminarGrupo(id,callback){
        const sql = "update grupo set estado = 0 where id_grupo = ?";
        db.query(sql,[id],callback);
    }

}

module.exports = new grupo();
