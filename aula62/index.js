// const nomes = ["Eduardo", "Maria", "Joana"]
// const novo = [...nomes]
// nomes.push("Renan")
// const nomes = new Array("Eduardo", "Maria", "Joana")

// novo.pop()
// console.log(nomes)
// console.log(novo)

const nome = "Renan Friande da Camara"
const nomes = nome.split(" ")
const primeiroNome = nomes.shift()
const restoNome = nomes.join(" ")
const nomeCompleto = `${primeiroNome} ${restoNome}`

console.log(nomes)
console.log(primeiroNome)
console.log(restoNome)
console.log(nomeCompleto)