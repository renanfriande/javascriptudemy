const mongoose = require("mongoose")
const validator = require("validator")

const ContatoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    sobrenome: { type: String, required: false, default: "" },
    telefone: { type: String, required: false, default: "" },
    email: { type: String, required: false, default: "" },
    criadoEm: { type: Date, default: Date.now }
})

const ContatoModel = mongoose.model("Contato", ContatoSchema)

class Contato {
    constructor(body) {
        this.body = body
        this.errors = []
        this.contato = null
    }

    async register() {
        this.valida()

        if(this.errors.length > 0) return
        this.contato = await ContatoModel.create(this.body)
    }

    valida() {
        this.cleanUp()

        // Validacao

        if (this.body.email && !validator.isEmail(this.body.email)) this.errors.push("E-mail invalido.")
        if(!this.body.nome) this.errors.push("Nome e um campo obrigatorio.")
        if(!this.body.email && !this.body.telefone) {
            this.errors.push("Pelo menos um contato precisa ser enviado: e-mail ou telefone")
        }
    }

    cleanUp() {
        for (const key in this.body) {
            if (typeof this.body[key] !== "string") {
                this.body[key] = ""
            }
        }

        this.body = {
            nome: this.body.nome,
            sobrenome: this.body.sobrenome,
            email: this.body.email,
            telefone: this.body.telefone,
        }
    }

    async edit(id) {
        if(typeof id !== "string") return
        this.valida()
        if(this.errors.length > 0) return
        this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, { new: true })
    }

    static async buscaPorId(id) {
        if(typeof id !== "string") return
        const contato = await ContatoModel.findById(id)
        return contato
    }

    static async buscaContatos(id) {
        const contatos = await ContatoModel.find()
            .sort({ criadoEm: -1 })
        return contatos
    }

    static async delete(id) {
        if(typeof id !== "string") return
        const contato = await ContatoModel.findOneAndDelete({_id: id})
        return contato
    }
}

module.exports = Contato