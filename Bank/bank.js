$(document).ready(function() {
    $("#loader").hide();
    $(document).ajaxStart(function(){$("#loader").show();})
               .ajaxStop(function(){$("#loader").hide();});

    $("#submit").click(function(){
        
        var searchVal = $("input[name='search']").val();
        var field = $("#field option:selected").val();

        var user = $("input[name='user']").val();
        var account = $("input[name='account']").val();
        var amount = $("input[name='amount']").val();
        var operation = $("#operation option:selected").val();

        //Examples of taking values
        // let gender = $("input[name='gender']:checked").val();
        // let age = $("input[name='age']").val();
        // let ptype = $("input[name='ptype']").val();
        // let os = $("#os option:selected").val();

        $.ajax({
            headers: { "Accept": "application/json"},
            url: "http://localhost:8080/bank",
            //type: "GET",
            type: "POST",
            data: {"user":user, "account":account, "amount":amount, "oper":operation},
            // beforeSend: function(xhr){
            //     xhr.withCredentials = true;
            // },
            success: ajaxSuccess,
            error: ajaxFailure
        });
    });
});

function ajaxSuccess(data){
    $('#content').empty();
    var resultHTML="";
    if (data.length>0){
        resultHTML = "<table><tr><th>Name</th><th>Account</th><th>Balance</th></tr>";
        
        for(let i=0;i<data.length;i++){        
            resultHTML = resultHTML + "<tr><td>" + data[i].name + "</td><td>" + data[i].number + "</td><td>" + data[i].balance + "</td></tr>";
        }
    } else {
        resultHTML = "<div><p>Not found</p></div>";
    }
    
    $("#content").append(resultHTML);
}

function ajaxFailure(xhr, status, exception){
    console.log(xhr, status, exception);
}