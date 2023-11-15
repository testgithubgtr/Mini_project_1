document.getElementById("submitButton").onclick = function(){
    var email = document.getElementById("emailInput").value;
    if(email !== '') {
        window.location.href = "page2.html"
    } else{
        alert("Please Enter an email !!")
    }
};