function CalcularOperadores()
{
	var miParrafo;
	var valor;
	miParrafo=document.getElementById('Resultado');
	valor=12+20;
	miParrafo.innerHTML+= "Sumando los numeros 12 + 20 es:" + valor +"<br>";
	valor=12-20;
	miParrafo.innerHTML+= "Resta los numeros 12 - 20 es:" + valor +"<br>";
	valor=12*20;
	miParrafo.innerHTML+= "Multiplicacion los numeros 12 * 20 es:" + valor +"<br>";
	valor=12/20;
	miParrafo.innerHTML+= "Divisor los numeros 12 / 20 es:" + valor +"<br>";
	valor = 8;
	miParrafo.innerHTML+= "Sumando el valor:" + (valor++) +"<br>";
	valor = 8;
	miParrafo.innerHTML+= "Sumando el valor:" + (++valor) +"<br>";
}
