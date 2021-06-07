$(document).ready(function(){
    $("#lookUp").click(function(){
        var word = $("input[name='word']").val();
        $.ajax({
        "url": "http://localhost:8080/dictionary.js",
        "type": "GET",
        data: {"word": word},
        "success": myAjaxSuccessFunction,
        "error": ajaxFailure
        });
    });
    
});
    
    function myAjaxSuccessFunction(data) {
    // do something with the data
        $("#content").append(data);    
    }

    function ajaxFailure(xhr, status, exception) {
    console.log(xhr, status, exception);
    }