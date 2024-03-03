var timeBegan = null;   // did the clock start?
var timeStopped = null; // at what time was the timer stopped?
var stoppedDuration = 0;    // how long was the timer stopped?
var startInterval = null;   // this is needed to stop the startInterval() method
var flag = false;   // to control the start/ stop of the timer

const timeContainer = document.querySelector('.timer-container');

timeContainer.addEventListener('click', () => {
    if (!flag){
        startTimer();
        flag = true;
    } else {
        stopTimer();
        flag = false;
    }
})

timeContainer.addEventListener('dblclick', () => {
    resetTimer();
})

function startTimer() {
    if (timeBegan == null){
        timeBegan = new Date();
    }

    if(timeStopped !== null){
        stoppedDuration += (new Date() - timeStopped);
    }

    startInterval = setInterval(clockRunning, 10);
}

function stopTimer() {
    timeStopped = new Date();
    clearInterval(startInterval);
}

function clockRunning(){
    var currentTime = new Date();
    var timeElapsed = new Date(currentTime - timeBegan - stoppedDuration);

    var minutes = timeElapsed.getUTCMinutes();
    var seconds = timeElapsed.getUTCSeconds();
    var miliseconds = timeElapsed.getUTCMilliseconds();

    miliseconds = Math.floor(miliseconds/10);

    document.getElementById('timer-display').innerHTML = (minutes = minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds = seconds < 10 ? '0' + seconds : seconds) + ":" + (miliseconds = miliseconds < 10 ? '0' + miliseconds : miliseconds)
}

function resetTimer(){
    clearInterval(startInterval)
    timeBegan = null;
    timeStopped = null;
    stoppedDuration = 0;
    document.getElementById('timer-display').innerHTML = '00:00:00'
}