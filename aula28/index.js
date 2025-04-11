/*
const tresHoras = 60 * 60 * 3 * 1000
const umDia = 60 * 60 * 24 * 1000
const data = new Date(0 + tresHoras + umDia)
*/
//const data = new Date(2019, 3, 20, 15, 14, 27)
/*const data = new Date(1744394481189)
console.log("Dia", data.getDate())
console.log("Mes", data.getMonth() + 1) //mes comeca do 0
console.log("Ano", data.getFullYear())
console.log("Hora", data.getHours())
console.log("Min", data.getMinutes())
console.log("Sec", data.getSeconds())
console.log("Ms", data.getMilliseconds())
console.log("Dia semana", data.getDay()) // 0 = domingo, 6 = sabado
console.log(data.toString())
console.log(Date.now())*/
function zeroEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

function formataData(data) {
    const dia = zeroEsquerda(data.getDate())
    const mes = zeroEsquerda(data.getMonth() + 1)
    const ano = zeroEsquerda(data.getFullYear())
    const hora = zeroEsquerda(data.getHours())
    const min = zeroEsquerda(data.getMinutes())
    const seg = zeroEsquerda(data.getSeconds())

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date()
const dataBrasil = formataData(data)
console.log(dataBrasil)