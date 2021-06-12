var express = require('express');
var app = express();
var cors = require('cors');
app.use(express.urlencoded({extended:false}));
app.use(cors());
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

var server = app.listen(5000,function(){
    console.log('Listening...');    
});
  
app.post('/', cors(), function(req, res, next) {
    var params = req.body;
    transactions(req, res, params);
});


 function transactions(req,res, params) {
    var query = "SELECT * FROM accounts WHERE 1=1";

    if(params.operation === 'new'){
        query = "insert into accounts(name, number, balance) values('" + params.user+ "'," + params.account+ "," + params.amount+ ")";
        con.query(query, function(err){
            if (err) {
                res.send('Creating account failed'); 
            }  
            
            res.send('Creating account successful'); 
        });
    } 
    if(params.operation === 'deposit'){
        query = "update accounts set balance = balance + " + params.amount + " where number = " + params.account;
        con.query(query, function(err){
            if (err) {
                res.send('Deposit failed'); 
            }  
            
            res.send('Deposit successful'); 
        });
        
    }                   
    if(params.operation === 'withdraw'){
        query = "update accounts set balance = balance - " + params.amount + " where number = " + params.account;
        con.query(query, function(err){
            if (err) {
                res.send('Withdraw failed'); 
            }  
            
            res.send('Withdraw successful'); 
        });
    }            
    if(params.operation === 'balance'){
        query = "SELECT balance FROM accounts where number = " + params.account;
        con.query(query, function(err, result, fields){
            if (err) {
                return console.error('error: ' + err.message);
            }  
            //res.send("<script>alert('The Current Balance is $ " +result[0].balance+ "');</script>");
            res.send("<p>The Current Balance is $" + result[0].balance + " </p>");  
        });
   }            
};