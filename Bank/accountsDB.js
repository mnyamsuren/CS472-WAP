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
    var user = params.user;
    var acct = params.account;
    var amnt = params.amount;
    var oper = params.operation;
    //var query = "SELECT * FROM Accounts WHERE " + field + " = '" + value + "'";
    //var query = "SELECT * FROM Accounts WHERE " + field + " LIKE '" + value + "%'";
    
    if (oper == "balance") {
        var query = "SELECT * FROM Accounts WHERE name = '" + user + "'";
    }

    con.query(query, function(err, result, fields){
        if (err) {
            return console.error('error: ' + err.message);
        }  
        console.log('query running (' + value + ')');
        res.send(result);  
    });
};

// exports.search = function (req,res, params) {
//     var field = params.field;
//     var value = params.value;
//     //var query = "SELECT * FROM Accounts WHERE " + field + " = '" + value + "'";
//     var query = "SELECT * FROM Accounts WHERE " + field + " LIKE '" + value + "%'";
//     if (!value) {
//         var query = "SELECT * FROM Accounts";
//     }

//     con.query(query, function(err, result, fields){
//         if (err) {
//             return console.error('error: ' + err.message);
//         }  
//         console.log('query running (' + value + ')');
//         res.send(result);  
//     });
// };