// Modificar os elementos do arquivo HTML através do JS. 

function changeText(ct) {
    let k = document.getElementsByTagName("h1")[0];
    k.innerHTML = ct.value;
}

function changeH2(texto) {
    let entrada = document.getElementsByTagName("h2")[0];
    entrada.innerHTML = texto.value;
}


function colorChange () {
    let colorBlue = document.getElementById("color");
    colorBlue.style.color = "blue";
}

var hiddenF = function(hf) {
    hf.style.display = "none";
}

var showF = function(sf) {
    sf.style.backgroundColor = "blue";
}

var backF = (bf) => {
    bf.style.backgroundColor = "chartreuse";
}
