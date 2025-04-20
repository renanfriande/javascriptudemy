// const objA = {
//     chaveA: "A"
// }

// const objB = {
//     chaveB: "B"
// }

// const objC = new Object()
// objC.chaveC = "C"

// Object.setPrototypeOf(objB, objA)
// Object.setPrototypeOf(objC, objB)
// console.log(objB.chaveA)

function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function (percentual) {
    return this.preco = this.preco - (this.preco * (percentual / 100))
}
Produto.prototype.aumento = function (percentual) {
    return this.preco = this.preco + (this.preco * (percentual / 100))
}

const p2 = {
    nome: "Caneca",
    preco: 20
}

const p1 = new Produto("Camiseta", 50)

Object.setPrototypeOf(p2, p1)

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
    tamanho2: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    }
})

p3.aumento(100)
console.log(p3)
