function criaCalculadora() {
    return {
        display: document.querySelector(`.display`),

        get inicia () {
            this.cliqueBotoes()
        },

        get clearDisplay() {
            this.display.value = ""
        },

        get deleteOne() {
            this.display.value = this.display.value.slice(0, -1)
        },

        get realizaConta() {
            let conta = this.display.value

            try {
                conta = eval(conta)

                if(!conta) {
                    window.alert("Conta invalida!")
                    return
                }

                this.display.value = conta
            } catch (error) {
                window.alert("Conta invalida!")
                return
            }
        },


        get cliqueBotoes() {
            document.addEventListener("click", (event) => {
                const target = event.target

                if(target.classList.contains("btn-num")) {
                    this.btnParaDisplay(target.innerText)
                }

                if(target.classList.contains("btn-clear")) {
                    this.clearDisplay()
                }

                if(target.classList.contains("btn-del")) {
                    this.deleteOne()
                }

                if(target.classList.contains("btn-eq")) {
                    this.realizaConta()
                }
            })
        },

        btnParaDisplay(number) {
            this.display.value += number
        }
    }
}

const calculadora = criaCalculadora()
calculadora.inicia