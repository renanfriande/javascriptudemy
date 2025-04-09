function criaPessoa (nome, sobrenome, idade) {
    return {
        nome, sobrenome, idade
    }
}

const pessoa1 = criaPessoa('Renan', 'Friande', 18)
const pessoa2 = criaPessoa('Maria', 'Eduarda', 93)
const pessoa3 = criaPessoa('Joao', 'Pontes', 23)
const pessoa4 = criaPessoa('Henrique', 'Mendonca', 44)
const pessoa5 = criaPessoa('Thiago', 'Oliveira', 76)


const pessoa6 = {
    nome: 'Mathias',
    sobrenome: 'Tucano',
    idade: 25,

    fala() {
        console.log(`A minha idade atual e ${this.idade}`)
    },

    incrementaIdade() {
        this.idade++
    }

}

pessoa6.fala()
pessoa6.incrementaIdade()
pessoa6.fala()
pessoa6.incrementaIdade()
pessoa6.fala()
pessoa6.incrementaIdade()
pessoa6.fala()