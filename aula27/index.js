const pontuacaoUsuario = 1000
const nivelUsuario = pontuacaoUsuario >=1000 ? 'Usuario VIP' : 'Usuario comum'

let corUsuario = null
const corPadrao = corUsuario || 'Preta'

console.log(nivelUsuario, corPadrao)

/*
if (pontuacaoUsuario >=1000) {
    console.log('Usuario VIP')
} else {
    console.log("Usuario comum")
}
*/