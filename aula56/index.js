function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        get nomeCompleto () {
            return `${this.nome} ${this.sobrenome}`
        },

        //Setter

        set nomeCompleto (string) {
            string = string.split(" ")
            this.nome = string.shift()
            this.sobrenome = string.join(" ")
        },
        fala (assunto = "falando sobre NADA") {
            return `${this.nome} esta ${assunto}`
        },
        altura,
        peso,
        // Getter
        get imc () {
            const indice = this.peso / this.altura**2
            return indice.toFixed(2)
        }
    }
}

const p1 = criaPessoa("Renan", "Friande", 1.74, 90)
p1.nomeCompleto = "Fabio Azevedo de Alcantara"
console.log(p1.nomeCompleto)
console.log(p1.sobrenome)

// console.log(p1.imc)
// console.log(p1.fala("falando sobre JS"))
// const p2 = criaPessoa("Maria", "Joaquina", 1.65, 70)
// console.log(p2.imc)
// console.log(p2.fala("falando sobre JS"))