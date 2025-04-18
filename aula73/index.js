const produto = {nome: "Caneca", preco: 1.8, material:  "porcelana"}
console.log(Object.entries(produto))

for(let valor of Object.entries(produto)) {
    console.log(valor[0], valor[1])
}









// Object.defineProperty(produto, "nome", {
//     writable: false,
//     configurable: false,
//     value: "Camisa"
// })
// produto.nome = "Pedrinho"
// delete produto.nome
// console.log(produto)

// console.log(Object.getOwnPropertyDescriptor(produto, "nome"))

// const outraCoisa = {...produto, material: "Porcelana"}
// const caneca = Object.assign({}, produto, {material: "porcelana"})
// produto.nome = "Pedro"
// console.log(produto)
// console.log(caneca)
// console.log(Object.keys(produto))