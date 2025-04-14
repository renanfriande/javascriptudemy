function soma(a=0, b=0) {
    return a + b
}

function soma2(a, b) {
   console.log(a+b)
}

function criaMultiplicador(multiplicador) {
    function multiplica(n){
        return n * multiplicador
    }

    return multiplica
}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadruplica = criaMultiplicador(4)

console.log(duplica(9))
console.log(triplica(9))
console.log(quadruplica(9))