const falar = {
    falar() {
        console.log(`${this.nome} esta falando`)
    }
}

const pessoaPrototype = {...falar}

function criaPessoa(nome, sobrenome) {

    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    })
}

const p1 = criaPessoa("Renan", "Friande")
p1.falar()