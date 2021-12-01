function insertar() {

    var valor = event.target.innerText;
    var pantalla = document.getElementById("resultado");

    if (valor === ",") {
        var inicial = 0;
        var decimal = 0;
        pantalla.innerText = ",";
    } else {
        pantalla.innerText = valor;
    }

}

function borrar() {

    var pantalla = document.getElementById("resultado");
    pantalla.innerText = 0;

}

function sumar() {

    var pantalla = document.getElementById("resultado");
    var n1 = 0;
    var n2 = 0;

    n1 = pantalla.innerText;
    console.log(n1);
    n2 = pantalla.innerText;
}

function comprobarComa() {
    
    var pantalla = String(document.getElementById("resultado").innerText);

    return pantalla.includes(",");

}

function comprobarCero() {

    var pantalla = String(document.getElementById("resultado").innerText);

    return pantalla.charAt(0);

}
