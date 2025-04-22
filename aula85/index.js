class ControleRemoto {
    constructor(tv) {
        this.tv = tv
        this.volume = 0
    }

    //Metodo de instancia
    aumentarVolume () {
        this.volume += 2
    }

    diminuirVolume () {
        this.volume -= 2
    }

    //Metodo estatico
    static trocaPilha() {
        console.log("Vou trocar")
    }
}

const controle1 = new ControleRemoto("LG")
// controle1.aumentarVolume()
// controle1.aumentarVolume()
// controle1.aumentarVolume()
// controle1.aumentarVolume()
ControleRemoto.trocaPilha()
console.log(controle1)
const controle2 = new ControleRemoto("Samsung")
console.log(controle2)

