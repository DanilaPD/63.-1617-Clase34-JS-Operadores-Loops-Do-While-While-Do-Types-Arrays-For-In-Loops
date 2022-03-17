//? https://www.w3schools.com/js/js_array_methods.asp

let arr1 = ["perro", "gato", 15, true];
let arr2 = ["pera", "hamburguesa", 3345, true];

//! Métodos con "arrays":

//* "Pop" saca el último:
console.log(arr1.pop()); // "Pop" devuelve lo que sacó.
console.log(arr1);

//

//* Lo opuesto: "Push" agrega al final:
console.log(arr2.push("papas fritas", "mayonesa")); // Devuelve el "largo" nuevo.
console.log(arr2);

let arr3 = ["vaso", "celular", 45, false];

//

//* "Splice":
//* 3 parámetros: Desde dónde empieza, cuántos borramos, qué agregamos a cambio:
arr3.splice(3, 0, "verde", "colectivo");
console.log(arr3);

arr3.splice(1, 3); // Con esto, solo saco porque no hay tercer parámetro:
console.log(arr3);

//

//* "Slice": Saca una parte y lo convierte en un nuevo array:
let arr4 = arr3.slice(1, 3); // Posición inicial, posición final - no inclusive.

console.log(arr4); // Nuevo array creado con "slice".
console.log(arr3); // El "arr3" todavía existe.
