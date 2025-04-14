const info = new Date()
const anoAtual = info.getFullYear()
const nome = 'Renan'
const sobrenome = 'Friande'
const idade = 18
const peso = 95
const alturaEmMetros = 1.74
let imc = peso/(alturaEmMetros**2)
let classificacao
const anoNascimento = anoAtual - idade 

if (imc<18.5) {
    classificacao = 'abaixo do peso'
} else if (imc>=18.5 && imc<25) {
    classificacao = 'em peso normal'
} else if (imc>=25 && imc<30) {
    classificacao = 'em sobrepeso' 
} else if (imc>=30 && imc<35) {
    classificacao = 'em obesidade grau I'
} else if (imc>=35 && imc<40) {
    classificacao = 'em obesidade grau II'
} else if (imc>=40) {
    classificacao = 'em obesidade grau III'
}

console.log(`${nome} ${sobrenome} tem ${idade} anos (nascido em ${anoNascimento}), pesa ${peso}Kg tem ${alturaEmMetros} metros de altura e seu IMC e de ${imc}, estando ${classificacao}`)