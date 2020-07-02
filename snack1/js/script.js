// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.
//

var array = [];
var somma = 0;

while (somma < 50) {
  var numero = parseInt(prompt('inserisci un numero'));
  somma = somma + numero;
  if(somma < 50) {
    array.push(numero);
  }
  console.log(somma);
}

console.log(array);
