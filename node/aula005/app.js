const path = require("path")
const caminhoArquivo = path.resolve(__dirname, "teste.json")
const escreve = require("./modules/escrever")
const ler = require("./modules/ler")

const pessoas = [
    {nome: "Joao"},
    {nome: "Maria"},
    {nome: "Pedro"},
    {nome: "Luiz"},
    {nome: "Joana"}
]
const json = JSON.stringify(pessoas, "", 2)


async function leArquivo(caminho) {
    await escreve(caminhoArquivo, json)
    const dados = await ler(caminho)
    renderizaDados(dados)
}

function renderizaDados(dados) {
    dados = JSON.parse(dados)
    dados.forEach(val => console.log(val.nome))
}
const dadosArquivo = leArquivo(caminhoArquivo)

