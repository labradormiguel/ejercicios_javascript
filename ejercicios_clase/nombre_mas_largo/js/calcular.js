var mayor = 0;
var campeon = "";
var contador = 0;
var numeros = 0;

function pulsar() {

    if (validarCajaNoVacia("nombre")) {

        // Si hay texto en el input text sigue adelante

        var texto = document.getElementById("nombre").value;
        var lista = [];

        // Metemos el value del input en un array

        lista.push(texto);

        for (var i = 0; i < lista.length; i++) {

            if (mayor < lista[i].length) {
                // Mientras se cumpla la condición estas variables almacenarán
                // el nombre más largo y el número de caracteres
                mayor = lista[i].length;
                campeon = lista[i];
            }
            // Añadimos uno al contador de nombres introducidos
            // y almacenamos la cantidad de caracteres en una variable
            // distinta, la anterior era para el más largo y esta para cualquiera
            contador++;
            numeros = lista[i].length;
        }

        // Creamos la estructura que añadiremos a la tabla

        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        td1.appendChild(document.createTextNode(contador));
        td2.appendChild(document.createTextNode(texto));
        td3.appendChild(document.createTextNode(numeros));

        var tr = document.createElement("tr");
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        var tabla = document.getElementById("listanombres");
        tabla.appendChild(tr);

        // Sustituimos en el HTML los placeholders para el número de nombres
        // y el más largo

        document.getElementById("total").innerHTML = contador;

        document.getElementById("campeon").innerHTML = campeon;
        document.getElementById("longitud").innerHTML = mayor;

        // Devolvemos el foco al input y hacemos visibles los stats que estaban
        // en "hidden"

        document.getElementById("nombre").focus();
        document.getElementById("nombre").value = '';
        document.getElementById("stats").style.visibility = "visible";
    }

    else {

        // Si la caja está vacía no añade nada y devolvemos el foco al input

        document.getElementById("nombre").focus();
        document.getElementById("nombre").value = '';
        return false;
    }

}
