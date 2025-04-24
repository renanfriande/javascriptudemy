function random(min=0, max=3) {
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

            resolve(msg.toUpperCase() + " - Passei na promise")
        }, tempo)
    })
}

// esperaAi("Fase 1", random())
//     .then(value => {
//         console.log(value)
//         return esperaAi("Fase 2", random())
//     })
//     .then(value => {
//         console.log(value)
//         return esperaAi("Fase 3", random())
//     })
//     .then(value => console.log(value))
//     .catch(e => console.log(e))

async function executa() {
    try {
        const fase1 = esperaAi("Fase 1", 1000)
        console.log(fase1)

        setTimeout(() => {
            console.log("Estava pendente: ", fase1)
        }, 1100)

        const fase2 = await esperaAi("Fase 2", random())
        console.log(fase2)

        const fase3 = await esperaAi("Fase 3", random())
        console.log(fase3)

        console.log("Terminamos na fase", fase3)
    } catch(e) {
        console.log("Error: ", e)
    }
}

executa()

//pending -> pendente
//fullfilled -> resolvida
//rejected -> rejeitada