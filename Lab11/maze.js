
var win = false;
$(document).ready(function(){
    $("#maze .boundary").mouseover(red);
    $("#end").mouseover(end);
    $("#start").click(reset);
    $("#maze").mouseleave(out);
});

var reset = function (){
    $("#maze .boundary").removeClass("youlose");
    $("#status").text("Started!");
    win = true;
}
var red = function (){
    if (win) {
        $("#maze .boundary").addClass("youlose");
        win = false;
        $("#status").text("Sorry, You lose. :[, Click the 'S' to begin");
    }
}

var end = function (){
    if (win) {
        $("#status").text("You win! :], Click the 'S' to begin");
        win = false;
    }
}

var out = function (){
    if (win) {
        $("#status").text("Click the 'S' to begin");
        win = false;
    }
}
 