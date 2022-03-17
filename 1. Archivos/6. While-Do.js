let inicial = 30;

// Primero chequea, después ejecuta si es "true" la condición:
console.log("While: ");
while (inicial < 10) {
  inicial++;
  console.log(inicial);
}

// Reasigno, no puedo redeclarar o inicializar porque ya lo hice arriba:
inicial = 30;

// Ejecuta al menos una vez, después chequea la condición:
console.log("Do While: ");
do {
  inicial++;
  console.log(inicial);
} while (inicial < 10);

//? https://i.redd.it/6wksqjmmyw321.jpg
