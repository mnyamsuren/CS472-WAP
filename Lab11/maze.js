var wallHit = false;
var started = false;

var loseFunc = () => {
    if (started){
        $(".boundary").addClass("youlose");
        $("h2").text("Sorry you lost :[");
        started = false;
        wallHit = true;
    }
}

$(document).ready(() => {
    $("#congratzImg").hide();

    $("#start").click((e) => { 
        console.log("started");
        started = true;
        wallHit = false;
        $(".boundary").removeClass("youlose");
        $("h2").text("Game On!");
        $("#congratzImg").hide();
    });

    $("#maze").mouseleave(() => { 
        loseFunc();
    });

    $(".boundary").mouseover(() => {
        loseFunc();
    });

    $("#end").mouseover(() => {
        if (started && !wallHit){
            $("h2").text("You win :]");
            $("#congratzImg").show();
            started = false;
        }
    });
});

var isStart = false;
var isInMap = false;
window.onload = function () {
    var wall = document.getElementsByClassName("wall");
    /*start */
    document.getElementById("start").addEventListener("mouseover", function () {
        document.getElementById("result").textContent = "";
        isStart = true;
        isInMap = true;
        for (var i = 0; i < wall.length; i++) { wall[i].style.backgroundColor = "#EEEEEE"; }

    })

    /*out of the map */
    document.getElementById("wholeMaze").addEventListener("mouseleave", function () {
        isInMap = false;
    });
    /*wall */
    for (var i = 0; i < wall.length; i++)
        wall[i].addEventListener("mouseover", function (event) {
            if (isStart) {
                event.target.style.backgroundColor = "#FF0000";
                document.getElementById("result").textContent = "You hit the wall, lost the game!";
                isStart = false;
            }
        });
    for (var i = 0; i < wall.length; i++)
        wall[i].addEventListener("mouseleave", function (event) {
            event.target.style.backgroundColor = "#EEEEEE";
        });
    /*end */
    document.getElementById("end").addEventListener("mouseover", function () {
        if (isStart) {
            if (isInMap) { document.getElementById("result").textContent = "Congratulation! You win the game!"; }
            else {
                document.getElementById("result").textContent = "Oh, my friend, please don't cheat!";
                isStart = false;
            }
        }
        isStart = false;
    });
}