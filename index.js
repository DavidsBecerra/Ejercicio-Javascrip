// ejercicio 1
var numero = 13
if (numero%2 == 0){
  console.log("el número es par");
} else {
  console.log("El número no es par");
}

// ejercicio 2
var options = ["piedra","papel","tijera"]
var player1 = prompt ("Elige entre piedra, papel o tijera")
var player2 = prompt ("Elige entre piedra, papel o tijera")

if (player1 === player2){
  console.log("Empate");
} else if (player1 === "piedra" && player2 === "tijera" || player1 === "papel" && player2 === "piedra" || player1 === "tijera" && player2 === "papel"){
  console.log("Jugador 1 gana");
} else {
  console.log("Jugador 2 gana");
}

// ejercicio 3
var semaforocolor = ["amarillo","rojo","verde"]
var semaforoleyenda = prompt ("ingrese un color entre amarillo, verde y rojo")

if (semaforoleyenda === "amarillo"){
  console.log("disminuya la velocidad");
} else if (semaforoleyenda === "rojo"){
  console.log("detengase");
} else if(semaforoleyenda === "verde"){
  console.log("puede pasar");
} else {
  console.log("error");
}

// ejercicio 4
// var operaciones = ["+","-","*","/"];
var num1 = parseInt (prompt ("primer número"));
var num2 = parseInt (prompt ("segundo numero"));
var operacion = prompt ("suma, resta, multiplicación o división");

if (operacion == "+"){
  console.log (num1 + num2);
} else if (operacion == "-"){
  console.log (num1 - num2);
} else if (operacion == "*"){
  console.log (num1 * num2);
} else if (operacion == "/"){
  console.log (num1 / num2);
} else {
  console.log("error");
}

