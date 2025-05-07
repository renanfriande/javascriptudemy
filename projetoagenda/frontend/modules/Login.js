export default class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass)
    }
    
    init() {
        this.events()
    }

    events() {
        console.log("cheguei")
        if(!this.form) return
        this.form.addEventListener("submit", e => {
            e.preventDefault()
            alert("FORM NAO ENVIADO")
        })
    }
}