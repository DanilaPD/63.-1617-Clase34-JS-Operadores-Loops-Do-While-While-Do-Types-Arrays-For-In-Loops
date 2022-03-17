//! While (condición sea cierta)
//! Expresión (que hace)

//* Sería como destripar un "for loop":

// for (let i = 0; i < 10; i++) {
//    console.log(i);
// }

let i = 0; // Primera parte del "for loop"

while (i < 10) {
  // Segunda parte del "for loop"

  console.log(i);

  i++; // Tercera parte del "for loop"
}

//* Loop infinito:
// while(true) {
//    algo
// }
