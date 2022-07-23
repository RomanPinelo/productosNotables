// Obteniendo elementos del DOM
var displayDisplay = document.getElementById("display");
var displayVariable = document.getElementById("variable");
var displaySigno = document.getElementById("signo");
var displayNumero = document.getElementById("numero");
var btnUno = document.getElementById("uno");
var btnDos = document.getElementById("dos");
var btnTres = document.getElementById("tres");
var btnEquis = document.getElementById("equis");
var btnCuatro = document.getElementById("cuatro");
var btnCinco = document.getElementById("cinco");
var btnSeis = document.getElementById("seis");
var btnYe = document.getElementById("ye");
var btnSiete = document.getElementById("siete");
var btnOcho = document.getElementById("ocho");
var btnNueve = document.getElementById("nueve");
var btnMas = document.getElementById("mas");
var btnMenos = document.getElementById("menos");
var btnCero = document.getElementById("cero");
var btnIgual = document.getElementById("igual");
var btnBorrar = document.getElementById("borrar");

var numeroDisplay = "";


// Eventos de los botones
btnEquis.addEventListener('click', function(){
  displayVariable.innerHTML = "x";
});

btnYe.addEventListener('click', function(){
  displayVariable.innerHTML = "y";
});

btnMas.addEventListener('click', function(){
  displaySigno.innerHTML = "+";
});

btnMenos.addEventListener('click', function(){
  displaySigno.innerHTML = "-";
});

btnCero.addEventListener('click', function(){
  numeroDisplay = displayNumero.innerText;
  numeroDisplay += "0";
  displayNumero.innerHTML = numeroDisplay;
});

btnUno.addEventListener('click', function(){
  numeroDisplay = displayNumero.innerText;
  numeroDisplay += "1";
  displayNumero.innerHTML = numeroDisplay;
});

btnDos.addEventListener('click', function(){
  numeroDisplay = displayNumero.innerText;
  numeroDisplay += "2";
  displayNumero.innerHTML = numeroDisplay;
});

btnTres.addEventListener('click', function(){
  numeroDisplay = displayNumero.innerText;
  numeroDisplay += "3";
  displayNumero.innerHTML = numeroDisplay;
});

btnCuatro.addEventListener('click', function(){
  numeroDisplay = displayNumero.innerText;
  numeroDisplay += "4";
  displayNumero.innerHTML = numeroDisplay;
});

btnCinco.addEventListener('click', function(){
  numeroDisplay = displayNumero.innerText;
  numeroDisplay += "5";
  displayNumero.innerHTML = numeroDisplay;
});

btnSeis.addEventListener('click', function(){
  numeroDisplay = displayNumero.innerText;
  numeroDisplay += "6";
  displayNumero.innerHTML = numeroDisplay;
});

btnSiete.addEventListener('click', function(){
  numeroDisplay = displayNumero.innerText;
  numeroDisplay += "7";
  displayNumero.innerHTML = numeroDisplay;
});

btnOcho.addEventListener('click', function(){
  numeroDisplay = displayNumero.innerText;
  numeroDisplay += "8";
  displayNumero.innerHTML = numeroDisplay;
});

btnNueve.addEventListener('click', function(){
  numeroDisplay = displayNumero.innerText;
  numeroDisplay += "9";
  displayNumero.innerHTML = numeroDisplay;
});

btnBorrar.addEventListener('click', function(){
  displayVariable.innerHTML = "";
  displaySigno.innerHTML = "";
  displayNumero.innerHTML = "";
});