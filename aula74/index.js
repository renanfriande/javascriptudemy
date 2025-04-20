function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.nomeCompleto = () => `${this.nome} ${this.sobrenome}`
}

Pessoa.prototype.nomeCompleto = () => `${this.nome} ${this.sobrenome}`

const pessoa1 = new Pessoa("Renan", "Friande")
const data = new Date()

console.log(pessoa1.nomeCompleto())