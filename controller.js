'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, res){
    response.ok("Aplikasi REST API ku berjalan!", res)
};

//menampilkan semua data mahasiswa
exports.tampilsemuamahasiswa = function(req, res){
    connection.query("select * from mahasiswa", function(error, rows, fields){
        if(error){
            console.log(error);        
        }else{
            response.ok(rows, res);
        }
    });
};

//menampilkan semua data mahasiswa berdasarkan id
exports.tampilberdasarkanid = function(req, res){
    let id = req.params.id;
    connection.query("select * from mahasiswa where id_mahasiswa = ?", [id],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok(rows, res);
        }
    });
};

//menambahkan data mahasiswa
exports.tambahmahasiswa = function(req, res){
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query("insert into mahasiswa (nim,nama,jurusan) values(?,?,?)", 
    [nim,nama,jurusan],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok("Berhasil menambahkan data", res)
        }
    });
};

//mengubah data berdasarkan id
exports.ubahmahasiswa = function(req, res){
    var id = req.body.id_mahasiswa;
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('update mahasiswa set nim=?, nama=?, jurusan=? where id_mahasiswa=?', [nim,nama,jurusan, id], 
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok('berhasil uba data', res)
        }
    });
};

//menghapus data berdasarkan id
exports.hapusMahasiswa = function(req, res){
    var id = req.body.id_mahasiswa;
    connection.query('delete from mahasiswa where id_mahasiswa=?', [id],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok('berhasil hapus data', res)
        }
    });
    
}