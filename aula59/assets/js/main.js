function Calculadora() {
    this.display = document.querySelector(`.display`)
    
    this.inicia = () => {
        this.capturaCliques()
        this.corrigeEnter()
        this.capturaEnter()
    }

    this.corrigeEnter = () => {
        document.addEventListener("keydown", (event) => {
            if (event.keyCode === 13) {
                this.display.focus()
            }
        })
    }

    this.capturaEnter = () => {
        document.addEventListener("keyup", (event) => {
            if(event.keyCode !== 13) return

            this.realizaConta()
        })
    }

    this.capturaCliques = () => {
        document.addEventListener("click", (event) => {
            const target = event.target
            if(target.classList.contains(`btn-num`)) {
                this.addNumDisplay(target)
            }
            if(target.classList.contains(`btn-clear`)) {
                this.clear()
            }
            if(target.classList.contains(`btn-del`)) {
                this.del(target)
            }
            if(target.classList.contains(`btn-eq`)) {
                this.realizaConta(target)
            }
        }) 
    }
    
    this.addNumDisplay = (target) => this.display.value += target.innerText

    this.clear = () => this.display.value = ""

    this.del = () => this.display.value = this.display.value.slice(0, -1)

    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value)

            if(!conta) {
                window.alert("Conta invalida")
            }

            this.display.value = conta
        } catch (error) {
            window.alert("Conta invalida!")
            return
        }
    }

}

const calculadora = new Calculadora()
calculadora.inicia()