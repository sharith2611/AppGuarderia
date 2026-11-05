
const db = require('../config/dbConfig')
// se llama a la configuracion de la bd

class matricula{

    getMatriculas(callback){
        const sql = "select id_matricula, id_nino, id_grupo, fecha_matricula, estado from matricula";
        db.query(sql,callback);
    }

    getMatriculaById(id,callback){
        const sql = "select id_matricula, id_nino, id_grupo, fecha_matricula, estado from matricula where id_matricula = ?";
        db.query(sql,[id],callback);
    }

    crearMatricula(datos,callback){
        const sql = "insert into matricula set ?";
        db.query(sql,datos,callback);
    }

    actualizarMatricula(id,datos,callback){
        const sql = "update matricula set ? where id_matricula = ?";
        db.query(sql,[datos,id],callback);
    }

    eliminarMatricula(id,callback){
        const sql = "delete from matricula where id_matricula = ?";
        db.query(sql,[id],callback);
    }

}

module.exports = new matricula();
