const numeros = (numero) => {
    console.log(numero)
    if (numero % 3 === 0 && numero % 5 === 0) {return `FizzBuzz`}
    if (numero % 3 === 0) {return `Fizz`}
    if (numero % 5 === 0) {return `Buzz`}  
    if (isNaN(numero)) {return `Nao e um numero`}
    if (numero % 3 !== 0 && numero % 5 !== 0) {return numero}
    
}

function geradorNumeros () {
    return Math.floor(Math.random() * (100))   
}

console.log(numeros(geradorNumeros()))