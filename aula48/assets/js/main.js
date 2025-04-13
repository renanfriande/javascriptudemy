function meuEscopo(){
    const inputTarefa = document.querySelector('.input-tarefa')
    const tarefas = document.querySelector('.tarefas')

    document.addEventListener('click', function(event){
        const target = event.target
        
        if(target.classList.contains('btn-tarefa')) {
            adicionarTarefa()
        }
        
        if(target.classList.contains("apagar")) {
            target.parentElement.remove()
            salvarTarefas()
        }
    })

    inputTarefa.addEventListener('keypress', function(event){
        if (event.keyCode === 13) {
            adicionarTarefa()
        }
    })

    function adicionarTarefa() {
        if (!inputTarefa.value) return
            criaTarefa(inputTarefa.value)   
    }

    function limpaInput () {
        inputTarefa.value = ''
        inputTarefa.focus()
    }

    function criaBotaoApagar(li) {
        li.innerText += " "
        const botaoApagar = document.createElement("button")
        botaoApagar.innerText = 'Apagar'
        botaoApagar.setAttribute("class", "apagar")
        botaoApagar.setAttribute("title", "apagar esta tarefa")
        li.appendChild(botaoApagar)
    }

    function criaLi() {
        const li = document.createElement("li")
        return li
    }

    function criaTarefa(textoInput) {
        const li = criaLi()
        li.innerHTML = textoInput
        tarefas.appendChild(li)
        limpaInput()
        criaBotaoApagar(li)
        salvarTarefas()
    }

    function salvarTarefas() {
        const liTarefas = tarefas.querySelectorAll("li")
        const listaDeTarefas = []

        for (let tarefa of liTarefas) {
            let tarefaTexto = tarefa.innerText
            tarefaTexto = tarefaTexto.replace("Apagar", "").trim()
            listaDeTarefas.push(tarefaTexto)
        }

        const tarefasJSON = JSON.stringify(listaDeTarefas)
        localStorage.setItem("tarefas", tarefasJSON)
    }

    function adicionaTarefasSalvas() {
        const tarefas = localStorage.getItem("tarefas")
        const listaDeTarefas = JSON.parse(tarefas)

        for(let tarefa of listaDeTarefas) {
            criaTarefa(tarefa)
        }
    }
    adicionaTarefasSalvas()
}
meuEscopo()