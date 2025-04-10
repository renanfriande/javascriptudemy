function meuEscopo () {
    const botaoEnviar = document.querySelector("form#formulario")
    botaoEnviar.addEventListener('submit', function(event) {
        event.preventDefault()
        calculoIMC()
    })

    function verificador(){

        const peso = document.querySelector('input#ipeso').value.replace(",", ".")
        const altura = document.querySelector('input#ialtura').value.replace(",", ".")
        
        if (peso.trim() === '' || altura.trim() === '' || isNaN(peso) || isNaN(altura)) {
            window.alert("Digite valores validos.")
            return false
        } else if (peso<0) {
            window.alert("Digite um peso valido.")
            return false
        } else if (altura>3) {
            window.alert("Digite uma altura valida.")
            return false
        }

        return true
    }
 
    function calculoIMC(){

        const peso = Number(document.querySelector('input#ipeso').value.replace(",", "."))
        const altura = Number(document.querySelector('input#ialtura').value.replace(",", "."))
        const resultado = document.querySelector('div#resultado')
        let IMC;
        let classificacao;

        if (!verificador()) {
            return
        } else {

        resultado.innerHTML = ''

        IMC = peso / (altura**2)

        if (IMC < 18.5) {
            classificacao = `abaixo do peso`
        } else if (IMC >= 18.5 && IMC < 25) {
            classificacao = `no peso normal`
        } else if (IMC >= 25 && IMC < 30) {
            classificacao = `em sobrepeso`
        } else if (IMC >= 30 && IMC < 35) {
            classificacao = `com obesidade grau I`
        } else if (IMC >= 35 && IMC < 40) {
            classificacao = `com obesidade grau II`
        } else if (IMC >= 40) {
            classificacao = `com obesidade grau II`
        }

        resultado.innerHTML += `<p>Seu IMC e: <strong>${IMC.toFixed(2).replace(".", ",")}</strong>, voce esta <strong>${classificacao}</strong></p>`

        }
    }
}
meuEscopo()
