function showbutton(){
    document.getElementById("Rezbutton").style.visibility="visible";
}
setTimeout("showbutton()",3000);

function showName(){
document.getElementById("name").style.visibility="visible";
}
setTimeout("showName()",1300);


function showPan2(){
    document.getElementById("pan2").style.display="block";
    document.getElementById("pan2").style.animation="fadeIn 0.7s";

    document.getElementById("pan3").style.display="none";
    document.getElementById("pan4").style.display="none";
}

function showPan3(){
    document.getElementById("pan3").style.display="block";
    document.getElementById("pan3").style.animation="fadeIn 0.7s";

    document.getElementById("pan2").style.display="none";
    document.getElementById("pan4").style.display="none";
}

function showPan4(){
    document.getElementById("pan4").style.display="block";
    document.getElementById("pan4").style.animation="fadeIn 0.7s";

    document.getElementById("pan3").style.display="none";
    document.getElementById("pan2").style.display="none";
}

function goHome(){
    document.getElementById("pan3").style.display="none";
    document.getElementById("pan3").style.animation="fadeOut 0.7s";

    document.getElementById("pan2").style.display="none";
    document.getElementById("pan2").style.animation="fadeOut 3s";

    document.getElementById("pan4").style.display="none";
    document.getElementById("pan4").style.animation="fadeOut 0.7s";
}

