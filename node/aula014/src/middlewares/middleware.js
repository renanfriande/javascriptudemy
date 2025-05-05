exports.middlewareGlobal = (req, res, next) => {
    console.log()
    
    if(req.body.cliente) {
        req.body.cliente = req.body.cliente.replace("Friande", "F.")
        console.log(`Vi que voce postou ${req.body.cliente}`)
        console.log()
    }
    next()
}

exports.outroMiddleware = (req, res, next) => {
    console.log("Outro middleware")
    next()
}