//? https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration

//! for ([expresión inicial]; [expresión condicional]; [expresión de actualización])
//! instrucción / qué es lo que hace

for (let i = 0; i <= 5; i++) {
  console.log(i);
}

//

let numeroInicial = 15;
let numeroFinal = 28;

for (let i = numeroInicial; i <= numeroFinal; i = i + 2) {
  console.log(i);
}
