function random(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== "string") reject("Bad value")
        setTimeout(() => {
            resolve(msg)
        }, tempo)
    })
}

esperaAi("Frase 1", random(1, 3))
    .then(resposta => {
        console.log(resposta)
        return esperaAi("Frase 2", random(1, 3))
    })
    .then(resposta => {
        console.log(resposta)
        return esperaAi(22222, random(1, 3))
    })
    .then(resposta => {
        console.log(resposta)
        return resposta + " concat"
    })
    .then(resposta => {
        console.log(resposta)
    })
    .then(() => {
        console.log("Eu serei o ultimo a ser exibido.")
    })
    .catch(error => {
        console.log("ERRO:", error)
    })
