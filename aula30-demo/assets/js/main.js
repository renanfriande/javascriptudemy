function meuEscopo() {
    // const date = new Date()
    // let header1 = document.querySelector(`h1.title`)
    // header1.innerHTML = formatDate(date)

    // function formatDate(date) {
    //     const weekDay = date.getDay()
    //     const day = date.getDate()
    //     const month = date.getMonth()
    //     const year = date.getFullYear()
    //     const hour = zeroLeft(date.getHours())
    //     const minutes = zeroLeft(date.getMinutes())
        
    //     let weekDayText = weekDayTxt(weekDay)
    //     let monthText = monthTxt(month)

    //     return `${weekDayText}, ${day} de ${monthText} de ${year} ${hour}:${minutes}`
    // }

    // function weekDayTxt (weekDay) {
    //     let weekDayTxt
    //     switch(weekDay) {
    //         case 0:
    //             weekDayTxt = `Domingo`
    //             break
    //         case 1:
    //             weekDayTxt = `Segunda-feira`
    //             break
    //         case 2:
    //             weekDayTxt = `Terca-feira`
    //             break
    //         case 3:
    //             weekDayTxt = `Quarta-feira`
    //             break
    //         case 4:
    //             weekDayTxt = `Quinta-feira`
    //             break
    //         case 5:
    //             weekDayTxt = `Sexta-feira`
    //             break
    //         case 6:
    //             weekDayTxt = `Sabado`
    //             break
    //     }   

    //     return weekDayTxt
    // }

    // function zeroLeft(num) {
    //     return num >= 10 ? `${num}` : `0${num}`

    // }

    // function monthTxt (month) {
    //     let monthText
    //     switch (month) {
    //         case 0:
    //             monthText = `janeiro`
    //             break
    //         case 1:
    //             monthText = `fevereiro`
    //             break
    //         case 2:
    //             monthText = `marco`
    //             break
    //         case 3:
    //             monthText = `abril`
    //             break   
    //         case 4:
    //             monthText = `maio`
    //             break
    //         case 5:
    //             monthText = `junho`
    //             break   
    //         case 6:
    //             monthText = `julho`
    //             break
    //         case 7:
    //             monthText = `agosto`
    //             break
    //         case 8:
    //             monthText = `setembro`
    //             break
    //         case 9:
    //             monthText = `outubro`
    //             break   
    //         case 10:
    //             monthText = `novembro`
    //             break
    //         case 11:
    //             monthText = `dezembro`
    //             break      
    //     }

    //     return monthText
    // }

    const h1 = document.querySelector(`h1.title`)
    const data = new Date()
   
    h1.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'})
}
meuEscopo()