// Clases

class Celda {
		constructor(nombre, alto, ancho, fondo, ejeTop, ejeLeft) { 
		this.nombre = nombre;
		this.ancho = ancho;
		this.alto = alto;
		this.fondo = fondo;
		this.ejeTop = ejeTop;
		this.ejeLeft = ejeLeft;
	};
 	agregar(fondo) {		
		var div = document.createElement(this.nombre); 
		div.id = this.nombre
		div.style.height = this.alto + "px"
		div.style.width = this.ancho + "px"
		div.style.background = this.fondo
//		div.style.padding = "1px"
		div.style.position = "absolute"
		div.style.textAlign = "left"
 		div.style.top = this.ejeTop + "px"
		div.style.left = this.ejeLeft + "px"
  		var fondo = document.getElementById(fondo)
  		fondo.appendChild(div);
	};
};