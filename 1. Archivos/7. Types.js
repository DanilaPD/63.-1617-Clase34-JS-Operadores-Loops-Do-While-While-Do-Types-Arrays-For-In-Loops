//* Types:

const a = "Soy un string";

const b = 15;

const c = true;

const arr = ["perro", "barrilete", true, 116, [15, 2, 14]];

const obj = {
  a: "comida",
  b: 18,
  c: 15,
  d: function (a, b) {
    console.log(a + b);
  },
};

const d = 19;

// Operación de la función:
obj.d(1, 3);

//! El + suma y concatena. Esto puede generar problemas a veces.

// Elementos del objeto:
obj.d(obj.c, obj.b);

// Elementos de afuera del objeto:
obj.d(b, d);

// Accediendo al "subarray":
console.log(arr[4][2]);

// Accediendo al "typeof":
console.log(typeof obj.d);
