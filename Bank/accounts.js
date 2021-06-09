var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var accountMod = require('./accountsDB');
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

var server = app.listen(8080,function(){
    console.log('Listening...');    
});
  
app.get('/bank', cors(), function(req, res, next) {
    // res.json('Hello World');
    var params = req.query;
    accountMod.search(req, res, params);
});
  
app.post('/bank', cors(), function(req, res, next) {
    var params = req.body;
    accountMod.search(req, res, params);
});