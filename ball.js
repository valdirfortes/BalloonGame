
var contbal = 0;
function addBall() {
    var bola = document.createElement("div");
    bola.setAttribute("class", "bola");

    var p1 = Math.floor(Math.random() * 1200);
    var p2 = Math.floor(100 + (Math.random()) * 500);


    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);


    bola.setAttribute("style", "left:" + p1 + "px;top:" + p2 +
        "px;background-color:rgb(" + r + "," + g + "," + b + ");");


    bola.setAttribute("onclick", "estourar(this)");


    document.body.appendChild(bola);

    contbal += 1;
    document.getElementById("baloes").innerHTML = contbal;

}



var count = 0;
function estourar(elemento) {
    document.body.removeChild(elemento);

    count += 1;

    document.getElementById("score").innerHTML = count;

}

function iniciar() {
    setInterval(addBall, 1000);
}
