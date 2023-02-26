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
            connection.log(error);        
        }else{
            response.ok(rows, res)
        }
    });
};