let hora = new Date()
let agora = hora.getHours()
let turno = ''

if (agora>=0 && agora<5) {
    turno = 'da madrugada'
} else if (agora>=6 && agora<12) {
    turno = 'da manha'
} else if (agora >= 12 && agora<18) {
    turno = 'da tarde'
} else if (agora >=18) {
    turno = 'da noite'
}

console.log(`Meu nome e "Renan Friande". Estou aprendendo JavaScript as ${agora} ${turno}`)