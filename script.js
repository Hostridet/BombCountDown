
let timer;
let isStarted = false;
function play()
{
    if (!isStarted)
    {
        countdown(20000000, timer);
        isStarted = true;
    }
}

function countdown(milliSecondsTime){
    let el = document.querySelector('.timer');
    timer = setInterval(function(){
        milliSecondsTime = milliSecondsTime - 1000;
        if(milliSecondsTime/1000 === 0) {
            clearTimeout(timer);
            el.innerHTML = 'BOOOOM';
            isStarted = false;
        }
        else {
            el.innerHTML = showtime(milliSecondsTime);
        }
    },1000);
}
function showtime(time)
{
    time = Number(time);
    let milliseconds = parseInt((time%1000))
        , seconds = parseInt((time/1000)%60)
        , minutes = parseInt((time/(1000*60))%60)
        , hours = parseInt((time/(1000*60*60))%24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds;
}


