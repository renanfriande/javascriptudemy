function meuEscopo() {
    const timer = document.querySelector('p#timer')
    timer.innerHTML = `00:00:00`
    let hoursTimer = 0
    let minutesTimer = 0
    let secondsTimer = 0
    let start = null

    document.addEventListener('click', function(event){
        const target = event.target
        
        if(target.classList.contains('iniciar')) {
            if (start !== null) return
            timer.style.color = `black`
             start = setInterval(function() {
            secondsTimer++
            if (secondsTimer === 60) {
                minutesTimer++
                secondsTimer = 0
            }
            if (minutesTimer === 60) {
                hoursTimer++
                minutesTimer = 0
            }
            timer.innerHTML = `${formateTimer(hoursTimer)}:${formateTimer(minutesTimer)}:${formateTimer(secondsTimer)}`
        }, 1000)
        }

        if(target.classList.contains('pausar')) {
            clearInterval(start)
            start = null

            timer.style.color = `red`
        }

        if(target.classList.contains('zerar')) {
            clearInterval(start)
            start = null

            timer.style.color = `black`

            hoursTimer = 0
            minutesTimer = 0
            secondsTimer = 0
            
            
            timer.innerHTML = `${formateTimer(hoursTimer)}:${formateTimer(minutesTimer)}:${formateTimer(secondsTimer)}`
        }
    })
    
    function formateTimer(num) {
        return num < 10 ? `0${num}` : num
    }
}
meuEscopo()
    // iniciarEvent.addEventListener('click', startTimer)
    // pausarEvent.addEventListener('click', pauseTimer)
    // zerarEvent.addEventListener('click', zerarTimer)

    // function startTimer() {
    //     if (start !== null) return
    //     timer.style.color = `black`
    //     start = setInterval(function() {
    //         secondsTimer++
    //         if (secondsTimer === 60) {
    //             minutesTimer++
    //             secondsTimer = 0
    //         }
    //         if (minutesTimer === 60) {
    //             hoursTimer++
    //             minutesTimer = 0
    //         }
    //         timer.innerHTML = `${formateTimer(hoursTimer)}:${formateTimer(minutesTimer)}:${formateTimer(secondsTimer)}`
    //     }, 1000)
    // }

    // function pauseTimer() {       
    //     clearInterval(start)
    //     start = null

    //     timer.style.color = `red`
    // }

    // function zerarTimer() {
    //     clearInterval(start)
    //     start = null

    //     timer.style.color = `black`

    //     hoursTimer = 0
    //     minutesTimer = 0
    //     secondsTimer = 0


    //     timer.innerHTML = `${formateTimer(hoursTimer)}:${formateTimer(minutesTimer)}:${formateTimer(secondsTimer)}`
    // }
