window.onload = function() {
    "use strict";
    // put all of your code here
    // calling function interval using unobstrusive style
    document.getElementById("btnForBG").onclick = interval;

    // Stop bigger decorations
    document.getElementById("btnStopForBG").onclick = stopDecoration;
    
    // calling function textStyle using unobstrusive style. it will change the style of text area when check box is checked
    document.getElementById("bling").onchange = textStyle;

    // calling functions using unobstrusive style to update text area values.
    document.getElementById("btnPig").onclick = igpay;
    document.getElementById("btnMalkov").onclick = malkov;
}
// Function to popup alert for intial test
function newAlert() {
    alert("Hello, World!");
}

// Function to enlarge text size of text area
function enlargeFont() {
    let textArea = document.getElementById("txtarea");
    let size = parseInt(textArea.style.fontSize) ? parseInt(textArea.style.fontSize) : 12;
    size += 2;
    textArea.style.fontSize =  size + "pt";
}

// Function to change text Area text style based on either checkbox is checked or not
function textStyle() {
    if (document.getElementById("bling").checked == true) {
        document.getElementById("txtarea").style.fontWeight = "bold";
        document.getElementById("txtarea").style.color = "green";
        document.getElementById("txtarea").style.textDecoration = "underline";
        //document.body.style.backgroundImage = 'url("http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg")';
        document.body.style.backgroundImage = "url(../images/Hundred-dollar-bill.jpg)";
    } else {
        document.getElementById("txtarea").style.fontWeight = "";
        document.getElementById("txtarea").style.color = "";
        document.getElementById("txtarea").style.textDecoration = "";
        document.body.style.backgroundImage = "";

    }
}

// Global variable to keep autoreferesh value
let timer;

function interval() {
    timer = setInterval(enlargeFont, 1000);
}

function stopDecoration() {
    clearInterval(timer);
}

function igpay() {
    let curText = document.getElementById("txtarea").value;
    let words = curText.split(/\s+/); // Array
    let result = "";
    for (const word of words) {
        const firstChar = word.charAt(0);
        if((firstChar.charCodeAt(0) >= 65 && firstChar.charCodeAt(0) <= 90) || (firstChar.charCodeAt(0) >= 97 && firstChar.charCodeAt(0) <= 122)) {
            if (firstChar.match("[aeoiuAEOIU]")) {
                result = result.concat(word, "ay ")
            } else {
                let conso = firstChar;
                let i = 1;
                const nextChar = word.charAt(i);
                while(nextChar.match("[aeoiuAEOIU]") == -1) {
                    conso += nextChar;
                    i++;
                }
                result = result.concat(word.charAt(i), word.substring(i+1), conso, "ay ");
            }
        }
    }
    document.getElementById("txtarea").value = result;
}

function malkov() {
    var words = document.getElementById("txtarea").value;
    var arr = words.split(/\s+/);
    var result = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= 5) {
            arr[i] = "Malkovich";
        }
        result += arr[i] + " ";
    }
    document.getElementById("txtarea").value = result;
}

