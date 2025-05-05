const HomeModel = require("../models/HomeModel")

// HomeModel.create({
//     titulo: "Outra coisa qualquer",
//     descricao: "Outra descricao"
// })
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e))

exports.paginaInicial = (req, res) => {
    res.render("index")
    return
}

exports.trataPost = (req, res, next) => {
    res.send(req.body)
}