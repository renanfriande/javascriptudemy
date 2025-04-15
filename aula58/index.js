function Pessoa(nome, sobrenome) {
    const ID = 123456

    const metodoInterno = () => {
        
    }
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = () => {
        console.log("Sou um metodo")
    }
}

const p1 = new Pessoa("Renan", "Friande")
p1.metodo()

