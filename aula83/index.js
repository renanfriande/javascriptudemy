class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`
    }

    set nomeCompleto(valor) {
        console.log("SETTER")
        valor = valor.split(" ")
        this.nome = valor.shift()
        this.sobrenome = valor.join()
    }
}

const p1 = new Pessoa("Renan", "Friande")
console.log(p1.nomeCompleto)
p1.nomeCompleto = "Pedro Mendonca"
console.log(p1.nomeCompleto)