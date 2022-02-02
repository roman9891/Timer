const durationInput = document.getElementById('duration')
const startButton = document.getElementById('start')
const pauseButton = document.getElementById('pause')
const circle = document.querySelector('circle')
const perimeter = circle.getAttribute('r') * 2 * Math.PI
let currentOffset = 0
let duration

circle.setAttribute('stroke-dasharray', perimeter)

console.log(perimeter)

const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration) {
        duration = totalDuration
    },
    onTick(timeRemaining) {
        circle.setAttribute('stroke-dashoffset', 
            perimeter * timeRemaining / duration - perimeter
        )
    },
    onComplete() {
        console.log('Complete')
    }
})