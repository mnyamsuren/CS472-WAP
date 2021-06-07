const { Console } = require("console");
var sequences = ["3, 1, 4, 1, 5", "1, 1, 2, 3, 5", "1, 4, 9, 16, 25","2, 3, 5, 7, 11","1, 2, 4, 8, 16"];
var answers = [9, 8, 36, 13, 32];
exports.getNextQuestion = function (req,res,vals) {
    var questionNum = 0;
    var score = 0;
    if(vals.questionNum != 'undefined' && isNaN(vals.questionNum) === false){
        questionNum = vals.questionNum;
        score = vals.score;
        if(answers[questionNum] === parseInt(vals.answer)){
            score++;
        }
        questionNum++;
        if(questionNum >= sequences.length){
            res.writeHead(200, {'Content-Type': 'text/html'});       
            res.write("<form action = 'http://localhost:8080/numberQuiz.js' method= 'get'>");
            //res.write("<form action = 'https://mnyamsuren.github.io/CS472-WAP/Lab10/numberQuiz.js' method= 'get'>");
            res.write("<h1>The Number Quiz</h1>")
            res.write("<p>Your current score is <span name = 'score'>" + score + "</span>.</p>");
            res.write("<p>Your have completed the Number Quiz, with a score of <span name = 'score'>" + score + "</span> of 5</p>");           
            res.write("</form>");
            return res.end();
        }
    }

    res.writeHead(200, {'Content-Type': 'text/html'});       
    res.write("<form action = 'http://localhost:8080/numberQuiz.js' method= 'get'>");
    //res.write("<form action = 'https://mnyamsuren.github.io/CS472-WAP/Lab10/numberQuiz.js' method= 'get'>");
    res.write("<h1>The Number Quiz</h1>")
    res.write("<p>Your current score is <span>" + score + "</span>.</p>");
    res.write("<p>Guess the next number in the sequence. </p>");
    res.write("<p>" + sequences[questionNum] + "</p>");
    res.write("<p>Your answer: </p>");
    res.write("<input type='hidden' name = 'score' value='" + score + "'>");
    res.write("<input type='hidden' name = 'questionNum' value='" + questionNum + "'>");
    res.write("<input type='number' name = 'answer'>");
    res.write("<p></p>");
    res.write("<input type='submit'>");
    res.write("</form>");
    return res.end();
};