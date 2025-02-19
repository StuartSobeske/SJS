let timerEnabled = true;
let timerRunning = false;
let timerStartTime;
let timerInterval;
let timer;
console.log('ok?')

function timerInit(timerId){
    if(timerId !== null && timerId !== undefined){
        timer = document.getElementById(timerId);
    }

    document.getElementById('body').addEventListener('keydown', function(event){
        console.log(event.code);
        if(timerEnabled === false){
            return;
        }
    
        if(event.code === 'Space'){
            if(timerRunning === false){
                let date = new Date();
                timerStartTime = date.getTime();
                timerRunning = true;
                timerInterval = setInterval(timerIncriment, 10);
                
            }
            else if(timerRunning === true){
                timerRunning  = false;
                clearInterval(timerInterval);
            }
        }
    })
}

function timerIncriment(){
    let date = new Date();
    let delta = date.getTime() - timerStartTime;
    let formattedTime = formatTime(delta);
    //console.log(formattedTime);
    if(timer !== null && timer !== undefined){
        timer.innerHTML = formattedTime;
    }
}

function formatTime(time){
    let ms = time % 1000;
    let cs = Math.floor(ms / 10);
    let _s = Math.floor(time / 1000);
    let s = _s % 60;
    let m = Math.floor(_s / 60);

    let seconds;
    if(s < 10) {
        seconds = '0' + s;
    }
    else {
        seconds = ''  + s;
    }

    let centiseconds;
    if(cs < 10){
        centiseconds = '0' + cs;
    }
    else{
        centiseconds = '' + cs;
    }

    if(m === 0){
        return `${seconds}.${centiseconds}`;
    }
    else{
        return `${m}:${seconds}.${centiseconds}`;
    }
}
