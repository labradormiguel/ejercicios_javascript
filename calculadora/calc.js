function insertar() {

    var valor = event.target.innerText;
    var pantalla = document.getElementById("resultado");

    if (valor === ",") {
        var inicial = 0;
        var decimal = 0;
        pantalla.innerText = "la coma";
    } else {
        pantalla.innerText = valor;
    }

    var n1 = 0;
    var n2 = 0;
    n2 = document.getElementById("resultado");
    //console.log(numero);

}

function borrar() {

    var pantalla = document.getElementById("resultado");
    pantalla.innerText = 0;

}
