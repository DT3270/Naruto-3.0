const altoCelda = 22;
const anchoCelda = 200;
const columnas = 4;
const anchoGrilla = anchoCelda * columnas + columnas -1;
const margenTop = 200;
const margenLeft = 8;

var contenido;

var lineaSalida = 1;
var grillaSalida = [];
var paqSel = [];
var encabezado;
var paquetes = [];
var productos = [];

contenido = localStorage.getItem("contenido");

if (contenido) {leerPreCargado()};

document.getElementById('file-input')
  .addEventListener('change', leerArchivo, false);

document.getElementById('pdv')
  .addEventListener('change', generarGrilla, false);

document.getElementById('tools')
  .addEventListener('click', mostrarHerramientas, false);
