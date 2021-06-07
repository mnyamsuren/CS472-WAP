var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    password: "mySQL2021",
    database: "entries"

});

con.connect(function(err){
    if (err) throw err;
    console.log("Connected...");
});

exports.find = function (req,res,vals) {
    var word = vals.word;

    con.query("SELECT * FROM entries WHERE word = '" +word+ "' ", function(err, result, fields){
        if (err) throw err;

        res.writeHead(200, {'Content-Type': 'text/html', 'Access-Control-Allow-Origin':'*', 
                      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE','Access-Control-Allow-Credentials': true,
                      'Access-Control-Allow-Headers': 'Content-Type'});
                      
        res.write("<!DOCTYPE html>");
        res.write("<html>");
        res.write("<head><meta charset=\"utf-8\"/>");
        res.write("<title>Calculator Web Site</title>");
        res.write("</head>");
        res.write("<body>");
        for (let i = 0; i < result.length; i++){
            res.write("<p>" + (i+1));
            res.write(" (" + result[i].wordtype + ") " + result[i].definition);
            res.write("</p>");
        }
        res.write("</body>");
        res.write("</html>");
        return res.end();
        
        console.log(result);

    });


};