//? https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...in

let comidas = {
  carnivoro: "hamburguesa",
  infantil: "sandwich",
  liquido: "gaseosa",
  vegano: "arroz yamani",
  postre: "pavlova",
  desayuno: "tostado y cafe",
};

for (const comida in comidas) {
  console.log(comida); // Nos trae los "keys", no los "valores".

  // Si yo quiero el "valor", hago lo siguiente:
  console.log(comidas[comida]);
  console.log(typeof comidas[comida]); // Lo tratamos como objeto, pero los convertimos en "strings" porque estamos accediendo a cada uno de los valores.

  // Ahora quiero usar ambos, el "key" y el "valor":
  console.log(`La comida del ${comida} es ${comidas[comida]}.`);
}
