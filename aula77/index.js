// 705.484.450-52
// 070.987.720-03

// const cpf = "070.987.720-03"
// const cpfLimpo = cpf.replaceAll(/\D+/g, "")

// const cpfPrimeiraVerif = [...cpfLimpo.slice(0, 9)]
// const primeiraVerificacaoCpf = cpfPrimeiraVerif.reduce((acumulador, valor, i) => {
//     acumulador += (Number(valor) * (10 - i))
//     return acumulador
// }, 0)

// let primeiroDigito = 11 - (primeiraVerificacaoCpf%11)
// if (primeiroDigito > 9) {primeiroDigito = 0}

// const cpfSegundaVerif = [...cpfLimpo.slice(0, 9) + primeiroDigito]

// const segundaVerificacaoCpf = cpfSegundaVerif.reduce((acumulador, valor, i) => {
//     acumulador += (Number(valor) * (11 - i))
//     return acumulador
// }, 0)

// let segundoDigito = 11 - (segundaVerificacaoCpf%11)
// if (segundoDigito > 9) {segundoDigito = 0}
// const cpfVerificado = cpfLimpo.slice(0, 9) + primeiroDigito + segundoDigito

// console.log(cpfLimpo)
// console.log(primeiroDigito)
// console.log(segundoDigito)
// if (cpfLimpo === cpfVerificado) {
//     console.log("CPF valido!")
// } else {
//     console.log("CPF invalido")
// }

function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
        get: function() {
            return cpfEnviado.replace(/\D+/g, "")
        }
    })
}

ValidaCPF.prototype.valida = function() {
    if(typeof this.cpfLimpo === "undefined") return false
    if(this.cpfLimpo.length !== 11) return false
    if(this.isSequencia()) return false

    const cpfParcial = this.cpfLimpo.slice(0, 9)
    const primeiroDigito = this.criaDigito(cpfParcial)
    const segundoDigito = this.criaDigito(cpfParcial + primeiroDigito)

    const novoCpf = cpfParcial + primeiroDigito + segundoDigito
    return novoCpf === this.cpfLimpo
}

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial)
    let total = cpfArray.reduce((acumulador, valor, i) => {
        acumulador += (Number(valor) * ((cpfArray.length+1) - i))
        return acumulador
    }, 0)

    const digito = 11 - (total % 11)
    return digito > 9 ? "0" : String(digito)
}

ValidaCPF.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return sequencia === this.cpfLimpo
}

const cpf = new ValidaCPF("705.484.450-52")

if(cpf.valida()) {
    console.log("Cpf valido")
} else {
    console.log("Cpf invalido")
}