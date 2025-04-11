// ... -> rest, ... -> spread

// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]
// const [primeiroNumero, , terceiroNumero, ...rest] = numeros

// console.log(primeiroNumero, terceiroNumero)
// console.log(rest)


const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
const [lista1, lista2, lista3] = numeros
console.log(lista3[2])


