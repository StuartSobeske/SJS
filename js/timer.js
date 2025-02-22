class Timer {

    constructor(timerId) {
        this.timer = null;
        this.running = false;
        this.startTime = null;
        this.timerInterval = null;
        this.resultDelta = null;
        this.resultFriendly = null;

        if(timerId !== null && timerId !== undefined){
            this.timer = document.getElementById(timerId);
        }
    }

    start() {
        this.resultDelta = null;
        this.resultFriendly = null;
        this.running = true;
        let date = new Date();
        this.timerStartTime = date.getTime();
        if(this.timer !== null){
            this.timerInterval = setInterval(() => this.timerIncriment(), 10);
        }
    }

    stop() {
        this.running = false;
        let date = new Date();
        let delta = date.getTime() - this.timerStartTime;
        this.resultDelta = delta;
        this.resultFriendly = this.formatTime(delta);
        clearInterval(this.timerInterval);
    }

    timerIncriment(){
        let date = new Date();
        let delta = date.getTime() - this.timerStartTime;
        let formattedTime = this.formatTime(delta);
        this.timer.innerHTML = formattedTime;
    }

    formatTime(time){
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

}