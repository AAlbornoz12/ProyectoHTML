function CambiarTexto()
{
	/*Cambiar el Texto de un elemento con id="Resultado" del documento HTML*/
	var miParrafo;
	var precio=22.65;


	miParrafo=document.getElementById('Resultado').style.fontSize = "24px";
	precio= precio +10;
	miParrafo.innerHTML += "El precio es" + precio +"<br>" + 
						   "El doble del precio es" + (precio*2) + "<br>";

/* Cambiamos el tipo de datos de precio */
	precio="Muy caro";
	miParrafo.innerHTML += "Tipo de datos: true" + "<br>" +
						   "El precio es" + false + "<br>" + 
						   "El doble del precio es" + (precio*2) + "<br>";

	/* Cambiamos el tipo de datos de precio */
	precio="Muy caro";
	miParrafo.innerHTML += "Tipo de datos: String" + "<br>" +
						   "El precio es" + precio + "<br>" + 
						   "El doble del precio es" + (precio*2) + "<br>";
}