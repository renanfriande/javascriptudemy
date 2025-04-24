function random(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== "string") {
                reject("Bad value")
                return
            }

            resolve(msg.toUpperCase() + " Passei na promise")
        }, tempo)
    })
}

//Promise.all, Promise.race, Promise.resolve, Promise.reject
// const promises = [
//     esperaAi("Promise 1", random(1, 5)),
//     esperaAi("Promise 2", random(1, 5)),
//     esperaAi("Promise 3", random(1, 5)),
//     esperaAi(1000, random(1, 5))
// ]

// Promise.race(promises)
//     .then(valor => {
//         console.log(valor)
//     })
//     .catch(error => {
//         console.log("Error:", error)
//     })

function baixaPagina() {
    const emCache = true

    if(emCache) {
        return Promise.resolve("Pagina em cache")
    } else {
        return esperaAi("Baixei a pagina", 3000)
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(e => console.log("Erro: ", e))