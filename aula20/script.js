function meuEscopo() {
    const pessoas = []
    const form = document.getElementById('form')
    const btnLimpar = document.getElementById('btnLimpar')
    const btnLimparDados = document.getElementById('btnLimparDados')

    form.addEventListener('submit', criarPessoa)
    btnLimpar.addEventListener('click', limpar)
    btnLimparDados.addEventListener('click', limparDados)
    

    function verificador() {
        let nome = document.getElementById('inome').value
        let sobrenome = document.getElementById('isobrenome').value
        let peso = document.getElementById('ipeso').value.replace(',', '.')
        let altura = document.getElementById('ialtura').value.replace(',', '.')
        
        if (nome.trim() === '' || sobrenome.trim() === '' || isNaN(peso) || isNaN(altura) || peso.trim() === '' || altura.trim() === '') {
            window.alert('Digite valores validos.')
            return false
        } else {
            return true
        }
        
    }

    function criarPessoa(event) {

        event.preventDefault()
        if (verificador() == false) {
            return
        }
        let nome = document.getElementById('inome').value
        let sobrenome = document.getElementById('isobrenome').value
        let peso = document.getElementById('ipeso').value.replace(',', '.')
        let altura = document.getElementById('ialtura').value.replace(',', '.')
        let res = document.getElementById('res')

        let pessoa = {
            nome,
            sobrenome,
            peso,
            altura
        }

        pessoas.push(pessoa)

        res.innerHTML += `${nome} ${sobrenome}: ${peso.replace('.', ',')}Kg e ${altura.replace('.', ',')} metros <br>`

        document.getElementById('inome').value = ''
        document.getElementById('isobrenome').value = ''
        document.getElementById('ipeso').value = ''
        document.getElementById('ialtura').value = ''

    }

    function limpar() {
        let res = document.getElementById('res')

        res.innerHTML = ``
    }

    function limparDados() {
        pessoas.length = 0
        let res = document.getElementById('res')
        res.innerHTML = ``
    }
}
meuEscopo()