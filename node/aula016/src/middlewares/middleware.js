exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = "Este e o valor da variavel local"
    next()
}

exports.outroMiddleware = (req, res, next) => {
    next()
}