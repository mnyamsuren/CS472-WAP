const { Console } = require("console");

exports.calc = function (req,res,vals) {
    var answer = 0;
    console.log(vals.operation);
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
    es.write("<form action = 'http://localhost:8080/nodeCalc.js' method= 'get'>");
    // res.write("<!DOCTYPE html>");
    // res.write("<html>");
    res.write("<head><meta charset=\"utf-8\"/>");
    res.write("<title>Calculator</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<h1> Simple Calculator</h1>");
    //res.write("<img src="calc.jpg" alt="calculator image" />");
    res.write("<div>");
    res.write("<label> First Number:   </label><input class= 'input' id='num1' type='number' maxlength='9'>");
    res.write("<p></p>");
    res.write("</div>");

    res.write("<div>");
    res.write("<select id='operator'>");
    res.write("<option value='+''>+</option>");
    res.write("<option value='-'>-</option>");
    res.write("<option value='/'>/</option>");
    res.write("<option value='*'>*</option>");
    res.write("</select>");
    res.write("<p></p>");
    res.write("</div>");

    res.write("<div>");
    res.write("<label> Second Number:   </label><input class= 'input' id='num2' type='number' maxlength='9'>");
    res.write("<p></p>");
    res.write("</div>");
    res.write("<input type='submit'>");
    res.write("<p></p>");
    res.write("<p font-size: large> The answer is: ");
    res.write(String(answer));
    res.write("</p>");
    res.write("</body>");
    // res.write("</html>");
    res.write("</form>");
    return res.end();
}