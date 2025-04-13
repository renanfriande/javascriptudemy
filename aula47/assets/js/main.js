function meuEscopo() {
    const iniciarEvent = document.querySelector('button#iniciar')
    const pausarEvent = document.querySelector('button#pausar')
    const zerarEvent = document.querySelector('button#zerar')
    let secondsTimer = 0
    let minutesTimer = 0
    let hoursTimer = 0
    let start

    formatTimer()

    iniciarEvent.addEventListener('click', startTimer)
    pausarEvent.addEventListener('click', pauseTimer)
    zerarEvent.addEventListener('click', clearTimer)

    function formatTimer() {
        const date = new Date("01-01-1970 00:00:00")
        let hours = zeroEsquerda(date.getHours())
        let minutes = zeroEsquerda(date.getMinutes())
        let seconds = zeroEsquerda(date.getSeconds())
        const divTimer = document.querySelector('div.timer')

        // format.toLocaleTimeString("pt-br", {
        //     hour12: false,
        //     hour: "2-digit",
        //     minute: "2-digit",
        //     second: "2-digit"
        // })

        const spanTimer = document.createElement('h2')
        spanTimer.innerHTML = `${hours}:${minutes}:${seconds}`       
        divTimer.appendChild(spanTimer)

        function zeroEsquerda(num) {
            if (num < 10) {
                return `0${num}`
            }

            return num
        }
    }
    
    
    function timer() {
        const timer = document.getElementsByTagName('h2')[0]
        const date = new Date("01-01-1970 00:00:00")
        const hours = zeroEsquerda(date.getHours())
        const minutes = zeroEsquerda(date.getMinutes())
        const seconds = Number(zeroEsquerda(date.getSeconds()))
        
        
        secondsTimer += 1
        if (secondsTimer === 60 && minutesTimer !== 0) {
            minutesTimer += 1
            secondsTimer = 0
        }

        if (secondsTimer === 60) {
            minutesTimer = 1
            secondsTimer = 0
        }

        if (minutesTimer === 60 && hoursTimer !== 0) {
            hoursTimer += 1
            minutesTimer = 0
        }

        if (minutesTimer === 60) {
            hoursTimer = 1
            minutesTimer = 0
        }
        timer.innerHTML = `${zeroEsquerda(hoursTimer)}:${zeroEsquerda(minutesTimer)}:${zeroEsquerda(secondsTimer)}`
        

        function zeroEsquerda(num) {
            if (num < 10) {
                return `0${num}`
            }

            return num
        }
    } 
    
    function startTimer() {
        start = setInterval(function(){
            timer()
        }, 0.1)
    }
    
    function pauseTimer() {
        clearInterval(start)
    }

    function clearTimer() {
        const timer = document.getElementsByTagName('h2')[0]
        hoursTimer = 0
        minutesTimer = 0
        secondsTimer = 0

        timer.innerHTML = `${zeroEsquerda(hoursTimer)}:${zeroEsquerda(minutesTimer)}:${zeroEsquerda(secondsTimer)}`

        function zeroEsquerda(num) {
            if (num < 10) {
                return `0${num}`
            }

            return num
        }
    }
}
meuEscopo()