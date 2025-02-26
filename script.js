const timer = document.getElementById('timer');
const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');
const resetBtn = document.querySelector('.reset-btn');

let timeMoving = 0;
let interval;
let isRunning = false;


function startTimer(){
    startBtn.addEventListener('click', () =>{
        interval = setInterval(() => {
            timeMoving++;
            const hours = Math.floor(timeMoving / 3600);
            const minutes = Math.floor((timeMoving % 3600) / 100);
            const seconds = timeMoving % 100;
            timer.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }, 1000);
    });
    
}

function stopTimer(){
    stopBtn.addEventListener('click', () => {
        clearInterval(interval);
    });
    
}

function resetTimer(){
    resetBtn.addEventListener('click', () =>{
        clearInterval(interval);
        timeMoving = 0;
        const hours = Math.floor(timeMoving / 3600);
        const minutes = Math.floor((timeMoving % 3600) / 100);
        const seconds = timeMoving % 100;
        timer.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    });
    
}

function updateTimer(){

}
startTimer();
stopTimer();
resetTimer();