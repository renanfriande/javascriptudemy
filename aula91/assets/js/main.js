// const request = (obj) => {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest()
//         xhr.open(obj.method, obj.url, true)
//         xhr.send()
    
//         xhr.addEventListener("load", () => {
//             if(xhr.status >= 200 && xhr.status <300) {
//                 resolve(xhr.responseText)
//             } else {
//                 reject(xhr.statusText)
//             }
//         })
//     })
// }

document.addEventListener("click", (e) => {
    const target = e.target
    const tag = target.tagName.toLowerCase()

    if(tag === "a") {
        e.preventDefault()
        carregaPagina(target)
    }
})

async function carregaPagina(target) {
    try {
        const href = target.getAttribute("href")
        const response = await fetch(href)
    
        if(response.status !== 200) throw new Error("ERRO 404")
    
        const html = await response.text()
        carregaResultado(html)
    } catch(e) {
        console.warn(e)
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector(".resultado")
    resultado.innerHTML = response
}