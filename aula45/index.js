function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError("Esperando instancia de Date.")
    }

    if (!data) {
        data = new Date()
    }

    return data.toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })

}

try {
const hora = retornaHora()   
} catch(error) {
    //tratar erro
    console.log(error)
} finally {
    console.log("Tenha um bom dia.")
}
