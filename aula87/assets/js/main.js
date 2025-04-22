class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector("#form")

        this.eventos()
    }

    eventos() {
        this.formulario.addEventListener("submit", event => {
            this.handleSubmit(event)
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        const validFields = this.isValid()
        const senhasValidas = this.senhasSaoValidas()

        if(validFields && senhasValidas) {
            alert("Formulario enviado")
            this.formulario.submit()
        }
    }

    senhasSaoValidas() {
        let valid = true

        const senha = this.formulario.querySelector(".senha")
        const repetirSenha = this.formulario.querySelector(".repetir-senha")

        if(senha.value !== repetirSenha.value) {
            valid = false
            this.criaErro(senha, "Campos senha e repetir senha precisam ser iguais")
            this.criaErro(repetirSenha, "Campos senha e repetir senha precisam ser iguais")

        }
        
        if(senha.value.length < 6 || senha.value.length > 12) {
            valid = false
            this.criaErro(senha, "Senha precisa estar entre 6 e 12 caracteres")
        }
        
        return valid
    }

    isValid() {
        let valid = true

        for(let errorText of this.formulario.querySelectorAll(".error-text")) {
            errorText.remove()
        }

        for(let campo of this.formulario.querySelectorAll(".validar")) {
            const label = this.formulario.querySelector(`label[for="${campo.id}"]`)
            const labelText = label ? label.innerText.replace(":", "") : "Campo"
            if(!campo.value) {
                this.criaErro(campo, `"${labelText}" nao pode estar em branco`)
                valid = false
            }

            if(campo.classList.contains("cpf")) {
                if(!this.validaCPF(campo)) valid = false
            }

            if(campo.classList.contains("usuario")) {
                if(!this.validaUsuario(campo)) valid = false
            }
        }

        return valid
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value)

        if(!cpf.valida()) {
            this.criaErro(campo, "CPF invalido")
            return false
        }
        return true
    }

    validaUsuario(campo) {
        const usuario = campo.value
        let valid = true
        if(usuario.length > 12 || usuario.length < 3) {
            this.criaErro(campo, "Usuario precisa ter entre 3 e 12 caracteres")
            valid = false
        }

        if(!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, "Nome de usuario precisa conter apenas letras e/ou numeros")
            valid = false
        }
        return valid
    }

    criaErro(campo, msg) {
        const div = document.createElement("div")
        div.innerHTML = msg
        div.classList.add("error-text")
        campo.insertAdjacentElement("afterend", div)
    }
}


const valida = new ValidaFormulario()