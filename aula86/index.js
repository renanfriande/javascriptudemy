class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, "cpfLimpo", {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, "")
        })
    }

    valida() {
        if(this.cpfLimpo.length !== 11) return false
        if(typeof this.cpfLimpo !== "string") return false
        if(this.isSequencia()) return false

        const cpfParcial = this.cpfLimpo.slice(0, 9)
        const primeiroDigito = ValidaCPF.criaDigito(cpfParcial)
        const segundoDigito = ValidaCPF.criaDigito(cpfParcial+primeiroDigito)

        const novoCpf = cpfParcial + primeiroDigito + segundoDigito
        return novoCpf === this.cpfLimpo
    }

    static criaDigito(cpfParcial) {
        const cpfArray = Array.from(cpfParcial)
        let total = cpfArray.reduce((acumulador, valor, i) => {
            acumulador += ((Number(valor)) * ((cpfArray.length+1) - i))
            return acumulador
        }, 0)

        const digito1 = 11 - (total % 11)
        return digito1 > 9 ? "0" : String(digito1)
    }
 
    isSequencia() {
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
        return sequencia === this.cpfLimpo
    }
}

const cpf1 = new ValidaCPF("705.484.450-52")

if(cpf1.valida()) {
    console.log("Cpf valido")
} else {
    console.log("Cpf invalido")
}
