//Reduce
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const total = numeros.reduce((acumulador, valor) => {
    return acumulador += valor
}, 0)
console.log(total)

const pessoa = [
    {nome: "Luiz", idade: 62},
    {nome: "Maria", idade: 23},
    {nome: "Eduardo", idade: 55},
    {nome: "Leticia", idade: 19},
    {nome: "Rosana", idade: 64},
    {nome: "Wallace", idade: 47},
]

const maisVelha = pessoa.reduce((acumulador, obj) => {
    if(acumulador.idade > obj.idade) return acumulador
    return obj
})

console.log(maisVelha)