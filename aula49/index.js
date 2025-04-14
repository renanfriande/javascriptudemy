function falaOi() {
    return "oi"
}

//

const souUmDado = function() {
    console.log("Dado")
}

//

executaFuncao(souUmDado)
function executaFuncao(funcao) {
    funcao()
}

// Arrow function

const souUmaArrowFunction = () => {
    console.log("Sou uma arrow function")
}
souUmaArrowFunction()

// setInterval (function() {
//     souUmaArrowFunction()
// }, 1000)

//

const obj = {
    falar: falaOi()
}

console.log(obj)

