function random (min, max) {
    const r = Math.random() * (max-min) + min
    return Math.floor(r)
}

const min = 1
const max = 50

let rand
let cont = 0

do {
    rand = random(min, max)
    console.log(rand)
    cont++
} while (rand !== 10)


// while (rand !== 10) {
//     rand = random(min, max)
//     console.log(rand)
//     cont++
// }

console.log(`Numeros gerados: ${cont}`)