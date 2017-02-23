
function mostrar() {
var nombre = document.getElementById("nombre").value;
var apellido = document.getElementById("apellido").value;
var dni = document.getElementById("dni").value;
var direccion = document.getElementById("direccion").value;
var persona = document.getElementsByClassName("datos");

if (persona[0].value.length == 0 || persona[1].value.length == 0 || persona[2].value.length == 0 || persona[3].value.length == 0) {
}else{

	document.getElementById("ficha").innerHTML=
        "<ul>" +
          "<li>Nombre: " + nombre + "</li>" +
          "<li>Apellido: " + apellido + "</li>" +
          "<li>DNI: " + dni + "</li>" +
          "<li>Dirección: " + direccion + "</li>" +
        "</ul>";
	}
}
