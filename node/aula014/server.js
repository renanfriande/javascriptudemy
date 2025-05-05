require("dotenv").config()

const express = require("express")
const app = express()
const mongoose = require("mongoose")

mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log("Base de dados conectada")
        app.emit("pronto")
    })
    .catch(e => console.log(e))

const routes = require("./routes")
const path = require("path")
const {middlewareGlobal} = require("./src/middlewares/middleware")

app.use(express.urlencoded({extended: true}))

app.use(express.static(path.resolve(__dirname, "public")))

app.set("views", "./src/views")
app.set("view engine", "ejs")

//Nossos proprios middlewares
app.use(middlewareGlobal)
app.use(routes)

app.on("pronto", () => {
    app.listen(3001, () => {
        console.log("Acessar http://localhost:3001")
        console.log("Servidor executado na porta 3001")
    })
})