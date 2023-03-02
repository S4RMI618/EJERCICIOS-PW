var elemento = document.createElement("li"),
    contenido = document.createTextNode("Nueva Opcion");
elemento.appendChild(contenido);

var padre = document.getElementsById("lista")
var primero = document.getElementsByTagName("lista")[0];
/* padre.appendChild(elemento); */
padre.appendChild(contenido);