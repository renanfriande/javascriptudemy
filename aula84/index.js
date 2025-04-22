class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome
        this.ligado = false
    }

    get ligar() {
        if(this.ligado) {
            console.log(`${this.nome} ja esta ligado`)
            return
        }
        this.ligado = true
    }
    
    get desligar() {
        if(!this.ligado) {
            console.log(`${this.nome} ja esta desligado`)
            return
        }
        this.ligado = false
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome)

        this.cor = cor   
        this.modelo = modelo 
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome)
        this.temWifi = temWifi
    }

    get ligar() {
        console.log("Voce alterou o metodo ligar de DispositivoEletronico")
    }
}

const s1 = new Smartphone("Samsung", "Preto", "Galaxy S10")
s1.ligar
console.log(s1)
const t1 = new Tablet("iPad", true)
console.log(t1.ligado)