// grabbing these elements from HTML
const timer = document.getElementById('timer');
const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');
const resetBtn = document.querySelector('.reset-btn');

// initalize timeMovement to zero
let timeMoving = 0;
// create variable for setting an interval
let interval;
// create variable and assign to false saying timer is not running currently
let isRunning = false;

// created function when the start button is clicked
function startTimer(){
    startBtn.addEventListener('click', () =>{
        // if isRunning is true return it
        if(isRunning){
            return;
        }
        // if isRunning is false which it is, then assign to true since it's on and running
        else{
            isRunning = true;
        }
        // set an interval for every second = 1000 miliseconds for interval
        interval = setInterval(() => {
            // increment from zero
            timeMoving++;
            // tell Javascript how time works
            const hours = Math.floor(timeMoving / 3600);
            const minutes = Math.floor((timeMoving % 3600) / 60);
            const seconds = timeMoving % 60;
            // change the text content of timer in HTML with padStarts to change timer 
            timer.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }, 1000);
    });
    
}

// function to stop the timer when stop button is clicked
function stopTimer(){
    stopBtn.addEventListener('click', () => {
        // clears the interval from startTimer()
        clearInterval(interval);
        // when you stop the timer, then we want isRunning to equal false.
        isRunning = false;
    });
    
}


// function to reset the timer back to 00:00:00 when resetBtn is clicked
function resetTimer(){
    resetBtn.addEventListener('click', () =>{
        // have to clear interval
        clearInterval(interval);
        // when you reset the timer we want it to display isRunning to false.
        isRunning = false;
        // initialize timeMoving back to zero
        timeMoving = 0;
        // tell Javascript how time works
        const hours = Math.floor(timeMoving / 3600);
        const minutes = Math.floor((timeMoving % 3600) / 100);
        const seconds = timeMoving % 100;
        // reset the timer to 00:00:00
        timer.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    });
    
}

// calling all functions for the code blocks to work
startTimer();
stopTimer();
resetTimer();