function getDiaSemanaTexto (diaSemana=7) {
    let diaSemanaTexto

    switch (diaSemana) {

    case 0:
        diaSemanaTexto =  `Domingo`
        break
    case 1:
        diaSemanaTexto = `Segunda`
        break
    case 2:
        diaSemanaTexto = `Terca`
        break
    case 3:
        diaSemanaTexto = `Quarta`
        break
    case 4:
        diaSemanaTexto = `Quinta`
        break
    case 5:
        diaSemanaTexto = `Sexta`
        break
    case 6:
        diaSemanaTexto = `Sabado`
        break
    default:
        diaSemanaTexto = ``
    }

    return diaSemanaTexto
}

const data = new Date('1987-04-19 00:00:00')
let diaSemana = data.getDay()
const diaSemanaTexto = getDiaSemanaTexto(diaSemana)





// if (diaSemana === 0) {
//     diaSemanaTexto = 'Segunda'
// }

console.log(diaSemana, diaSemanaTexto)