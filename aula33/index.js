const pessoa = {
    nome: `Renan`,
    sobrenome: `Friande`,
    idade: 30,
    endereco: {
        rua: `Otelo Rosa`,
        numero: 320
    }
}

const {nome: nomePessoa, sobrenome: sobrenomePessoa, ...resto} = pessoa
console.log(nomePessoa, resto)