// const pessoa = {
//     nome: "Renan",
//     sobrenome: "Friande",
//     idade: 18
// }

// const chave = "nome"
// console.log(pessoa[chave])

// const pessoa1 = new Object()
// pessoa1.nome = "Renan";
// pessoa1.idade = 18
// pessoa1.falarNome = function() {
//     console.log(`${this.nome} esta falando seu nome`)
// }
// pessoa1.getDataNascimento = function() {
//     const dataAtual = new Date()
//     return dataAtual.getFullYear() - this.idade
// }
// console.log(pessoa1)
// pessoa1.falarNome()
// console.log(pessoa1.getDataNascimento())

// for(let chaves in pessoa1) {
//     console.log(pessoa1[chaves])
// }

function pessoaMolde (nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = pessoaMolde("Renan", "Friande")
console.log(p1.nomeCompleto)

// new = {} <- this and return this

function Pessoa (nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome

    Object.freeze(this)
}

const p2 = new Pessoa("Renan", "Friande")
p2.nome = "Pedro"
console.log(p1)
console.log(p2)

