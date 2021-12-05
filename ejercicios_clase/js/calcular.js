var mayor = 0;
var campeon = "";
var contador = 0;
var numeros = 0;

function pulsar() {

    if (validarCajaNoVacia("nombre")) {

        var texto = document.getElementById("nombre").value;
        var lista = [];

        lista.push(texto);

        for (var i = 0; i < lista.length; i++) {

            if (mayor < lista[i].length) {
                mayor = lista[i].length;
                campeon = lista[i];
            }
            contador++;
            numeros = lista[i].length;
        }

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

        document.getElementById("total").innerHTML = contador;

        document.getElementById("campeon").innerHTML = campeon;
        document.getElementById("longitud").innerHTML = mayor;

        document.getElementById("nombre").focus();
        document.getElementById("nombre").value = '';
        document.getElementById("stats").style.visibility = "visible";
    }

    else {

        document.getElementById("nombre").focus();
        document.getElementById("nombre").value = '';
        return false;
    }

}
