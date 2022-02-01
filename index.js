class Timer {
    constructor(duration, startButton, pauseButton) {
        this.duration = duration
        this.startButton = startButton
        this.pauseButton = pauseButton

        this.startButton.addEventListener('click', this.start)
    }

    start() {
        console.log("You clicked start")
    }
}