// Map
// Dobre os numeros
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const numerosDobrados = numeros.map(valor => valor*2)
console.log(numerosDobrados)


const pessoa = [
    {nome: "Luiz", idade: 62},
    {nome: "Maria", idade: 23},
    {nome: "Eduardo", idade: 55},
    {nome: "Leticia", idade: 19},
    {nome: "Rosana", idade: 32},
    {nome: "Wallace", idade: 47},
]

const nomes = pessoa.map((obj) => `${obj.nome}`)
console.log(nomes)

const idades = pessoa.map((obj) => {
    return {idade: obj.idade}
})
console.log(idades)

const atribuiIds = pessoa.map((obj, indice) => {
    const newObj = {...obj}
    newObj.id = indice
    return newObj
})

console.log(atribuiIds)
console.log(pessoa)