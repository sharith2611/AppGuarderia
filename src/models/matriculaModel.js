
const db = require('../config/dbConfig')
// se llama a la configuracion de la bd

class matricula{

    getMatriculas(callback){
        const sql = "select id_matricula, id_nino, id_grupo, fecha_matricula, estado from MATRICULA";
        db.query(sql,callback);
    }

    getMatriculaById(id,callback){
        const sql = "select id_matricula, id_nino, id_grupo, fecha_matricula, estado from MATRICULA where id_matricula = ?";
        db.query(sql,[id],callback);
    }

    createMatricula(datos,callback){
        const sql = "insert into MATRICULA set ?";
        db.query(sql,datos,callback);
    }

    updateMatricula(id,datos,callback){
        const sql = "update MATRICULA set ? where id_matricula = ?";
        db.query(sql,[datos,id],callback);
    }

    deleteMatricula(id,callback){
        const sql = "delete from MATRICULA where id_matricula = ?";
        db.query(sql,[id],callback);
    }

}

module.exports = new matricula();
