let minutesTimer = document.querySelector("#minutes");
let secondsTimer = document.querySelector("#seconds");

minutes = 0;
seconds = 0; 

function pomodoroTimer(){
    seconds++;
    if(seconds === 60){
        seconds = 0;
        minutes++;
    }

    const setMinutes = String(minutes).padStart(2, "0");
    const setSeconds = String(seconds).padStart(2, "0");

    minutesTimer.textContent = setMinutes;
    secondsTimer.textContent = setSeconds;
}

setInterval(pomodoroTimer, 1000)
