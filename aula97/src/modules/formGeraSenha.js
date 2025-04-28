import geraSenha from "./geradores";

const senhaGerada = document.querySelector(".senha")
const qtdCaracteres = Number(document.querySelector("#QtdCaracter").value)
const chkNumber = document.querySelector("#numbers")
const chkUpperCase = document.querySelector("#uppercase")
const chkLowerCase = document.querySelector("#lowercase")
const chkSymbols = document.querySelector("#symbols")
const gerarSenha = document.querySelector(".gerar")

export default () => {
    gerarSenha.addEventListener("click", e => {
        e.preventDefault()
        senhaGerada.innerHTML = gera()
    })
}

function gera() {
    const senha = geraSenha(
        qtdCaracteres,
        chkUpperCase.checked,
        chkLowerCase.checked,
        chkNumber.checked,
        chkSymbols.checked
    )

    return senha || "Nada selecionado"
}