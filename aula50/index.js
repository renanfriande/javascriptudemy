function funcao() {
    let total = 0
    for (let argumento of arguments) {
        total += argumento
    }
    console.log(total)
}
funcao(1, 2, 3, 4, 5, 6)

function funcao2({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade)
}
// funcao2 ({nome: "Renan", sobrenome: "Friande", idade: 18})

const obj = {
    nome: "Renan",
    sobrenome: "Friande",
    idade: 18
}

funcao2 (obj)

const conta = (...args) => {
    console.log(args)
}
conta("+", 1, 20, 30, 40, 50)