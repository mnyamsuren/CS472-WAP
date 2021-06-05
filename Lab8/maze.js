
var win = false;

$(document).ready(function(){
    $("#maze .boundary").mouseover(lost);
    $("#end").mouseover(won);
    $("#start").click(reset);
    $("#maze").mouseleave(out);
});

var reset = function (){
    $("#maze .boundary").removeClass("youlose");
    $("#status").text("Started!");
    win = true;
    document.getElementById("congratzImg").style.display = 'none';
}
var lost = function (){
    if (win) {
        $("#maze .boundary").addClass("youlose");
        win = false;
        $("#status").text("Sorry, You lose. :[,");

    }
}

var won = function (){
    if (win) {
        $("#status").text("You win! :]");
        win = false;
        document.getElementById("congratzImg").style.display = 'inline';
    }
}

var out = function (){
    if (win) {
        $("#status").text("Click the 'S' to begin");
        win = false;
    }
}
 