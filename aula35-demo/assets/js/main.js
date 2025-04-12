function meuEscopo(){

    const elementos = [
        {tag: `p`, texto: `Qualquer texto`},
        {tag: `div`, texto: `Frase2`},
        {tag: `footer`, texto: `Frase3`},
        {tag: `section`, texto: `Frase4`}
    ]

    const changesHTML = document.querySelector(`section.container`)
    const div = document.createElement('div')
    
    
    for (let i = 0; i < elementos.length; i++) {
        let {tag: tagElement, texto: textElement} = elementos[i]
        addElement (tagElement, textElement)
    }
    
    function addElement (tagElement, textElement) {
        let createdElement = document.createElement(tagElement)
        createdElement.innerText = textElement
        // let createdText = document.createTextNode(textElement)
        // createdElement.appendChild(createdText)
        div.appendChild(createdElement)
    }

    changesHTML.appendChild(div)
}
meuEscopo()
