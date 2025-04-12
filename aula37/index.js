const nome = [`Renan`, `Luiz`, `Carlos`]
const pessoa = {
    nome: `Luiz`,
    sobrenome: `Otavio`
}

// for (let i in nome) {
//     console.log(nome[i])
// }

for (let i of nome) {
    console.log(i)
}

for (let key in pessoa) {
    console.log(key)
}