const Login = require("../models/LoginModel")

exports.index = (req, res, next) => {
    if(req.session.user) return res.render("logado")
    return res.render("login")
}

exports.register = async (req, res, next) => {
    try {
        const login = new Login(req.body)
        await login.register()

        if (login.errors.length > 0) {
            req.flash("errors", login.errors)
            req.session.save(function () {
                return res.redirect("/login")
            })
            return
        }
        
        req.flash("success", "Seu usuario foi criado com sucesso")
        req.session.save(function () {
            return res.redirect("/login")
        })
    } catch (e) {
        console.log(e)
        return res.render()
    }
}

exports.enter = async (req, res, next) => {
    try {
        const login = new Login(req.body)
        await login.enter()

        if (login.errors.length > 0) {
            req.flash("errors", login.errors)
            req.session.save(function () {
                return res.redirect("/login")
            })
            return
        }
        
        req.flash("success", "Voce entrou no sistema.")
        req.session.user = login.user
        req.session.save(function () {
            return res.redirect("/login")
        })
    } catch (e) {
        console.log(e)
        return res.render()
    }
}

exports.logout = (req, res) => {
    req.session.destroy()
    res.redirect("/")
}