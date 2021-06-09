var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'mySQL2021',
    database: 'bank'
});

con.connect(function(err){
    if (err) {
        return console.error('error: ' + err.message);
      }
    console.log('Connected...');    
});

exports.search = function (req,res, params) {
    var field = params.field;
    var value = params.value;
    
    con.query("SELECT * FROM accounts WHERE " + field + " = '" + value + "'", function(err, result, fields){
        if (err) {
            return console.error('error: ' + err.message);
        }  
        
        console.log('query running (' + value + ')');
        res.send(result);  
    });
};
