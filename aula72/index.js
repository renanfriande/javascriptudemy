function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco

    let estoquePrivado = estoque
    Object.defineProperty(this, "estoque", {
        enumerable: true, //mostra a chave (for in)
        configurable: false, //configuravel (apagar a chave)
        get: function() {
            return estoquePrivado
        },
        set: function(valor) {
            if(typeof valor !== "number") {
                console.log("valor invalido")
                return
            }
            estoquePrivado = valor
        }        
    })
}

function criaProduto(nome) {
    return {
        get nome() {
            return nome
        },
        set nome(valor) {
            nome = valor
        }
    }
}

// const p1 = new Produto("Camiseta", 20, 3)
// p1.estoque = 500
// console.log(p1)
// console.log(p1.estoque)

const p2 = criaProduto("Camiseta")
p2.nome = "Jeans"
console.log(p2.nome)