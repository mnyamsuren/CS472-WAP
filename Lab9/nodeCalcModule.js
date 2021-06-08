const { Console } = require("console");

exports.calc = function (req,res,vals) {
    var answer = 0;
    // console.log(vals.num1);
    // console.log(vals.operation);
    // console.log(vals.num2);
    switch(vals.operation){
        case '+': 
        answer = parseInt(vals.num1) + parseInt(vals.num2);
        break;
        case '-': 
        answer = parseInt(vals.num1) - parseInt(vals.num2);
        break;
        case '*': 
        answer = parseInt(vals.num1) * parseInt(vals.num2);
        break;
        case '/': 
        answer = parseInt(vals.num1) / parseInt(vals.num2);
        break;
        case '%': 
        answer = parseInt(vals.num1) % parseInt(vals.num2);
        break;
        default: break;
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head><meta charset=\"utf-8\"/>");
    res.write("<title>Calculator</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<h3>Result: ");
    res.write(String(answer));
    res.write("</h3>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
};