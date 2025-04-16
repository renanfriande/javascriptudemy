const nomes = ["Maria", "Joao", "Eduardo", "Gabriel", "Julia"]

// nomes.splice(indice, delete, elem1, elem2 , elem3...)

// POP

const removidoPop = nomes.splice(-1, 1)

// SHIFT

const removidoShift = nomes.splice(0, 1)

// PUSH

const adicionadoPush = nomes.splice(nomes.length, 0, "Renan", "Friande", "Camara")

// UNSHIFT

const adicionadoUnshift = nomes.splice(0, 0, "Renan")

console.log(nomes)
