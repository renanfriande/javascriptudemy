// Filter, map, reduce

// Retorne os numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// const maioresQueDez = []

// for (valor of numeros) {
//     if (valor>10) {
//         maioresQueDez.push(valor)
//     }
// }
// console.log(maioresQueDez)



// function callbackFilter(valor) {
//     return valor > 10
// }

// const maioresQueDez = numeros.filter(callbackFilter)
// console.log(maioresQueDez)

const maioresQueDez = numeros.filter(valor => valor > 10)
console.log(maioresQueDez)


const pessoa = [
    {nome: "Luiz", idade: 62},
    {nome: "Maria", idade: 23},
    {nome: "Eduardo", idade: 55},
    {nome: "Leticia", idade: 19},
    {nome: "Rosana", idade: 32},
    {nome: "Wallace", idade: 47},
]

const nomeCincoLetras = pessoa.filter(obj => obj.nome.length > 5)

const pessoasCinquentaAnos = pessoa.filter(obj => obj.idade > 50)

const pessoasTerminaA = pessoa.filter((obj) => {
    return obj.nome.toLocaleLowerCase().endsWith("a")
})
console.log(nomeCincoLetras)
console.log(pessoasCinquentaAnos)
console.log(pessoasTerminaA)