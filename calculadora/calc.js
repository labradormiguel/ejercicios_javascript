function insertar() {

    var valor = event.target.innerText;
    var pantalla = document.getElementById("resultado");

    // Añadimos decimales, comprueba que si ya hay una coma no añada otra
    if (valor === "," && comprobarComa() === true) {

    } // Si empieza por cero, hay una coma y el valor es distinto a coma que lo añada después
    else if (comprobarCero() === "0" && valor !== "," && comprobarComa === true) {
        pantalla.innerText = pantalla.innerText + valor;

    } // Si hay solo un cero y metemos una coma que la ponga después del cero
    else if (comprobarCero() === "0" && valor === ",") {
        pantalla.innerText = pantalla.innerText + ",";

    } // Si empieza por cero, no hay coma y el valor es distinto a coma que lo sustituya
    else if (comprobarCero() === "0" && valor !== "," && comprobarComa() === false) {
        pantalla.innerText = valor;

    } // Para todo lo demás, añadir el valor pulsado al mostrado en pantalla 
    else {
        pantalla.innerText = pantalla.innerText + valor;

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
