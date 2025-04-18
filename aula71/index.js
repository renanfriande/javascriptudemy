// defineProperty - defineProperties

function Produto(nome, preco, estoque) {

    Object.defineProperty(this, "estoque", {
        enumerable: true, //mostra a chave (for in)
        value: estoque, //valor
        writable: true, //modificavel
        configurable: false //configuravel (apagar a chave)
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true, //mostra a chave (for in)
            value: nome, //valor
            writable: true, //modificavel
            configurable: true //configuravel (apagar a chave)  
        },
        preco: {
            enumerable: true, //mostra a chave (for in)
            value: preco, //valor
            writable: true, //modificavel
            configurable: true //configuravel (apagar a chave)
        }
    })
}

const produto1 = new Produto("Camiseta", 20, 3)
console.log((produto1))

for(let chave in produto1) {
    console.log(chave)
}