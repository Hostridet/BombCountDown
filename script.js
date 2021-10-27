
let timer;
let isStarted = false;
function play()
{
    countdown(20000000, timer);
}

function countdown(milliSecondsTime){
    let el = document.querySelector('.timer');
    timer = setInterval(function(){
        milliSecondsTime = milliSecondsTime - 1000;
        if(!isStarted) {
            el.innerHTML = '';
            clearTimeout(timer);
        }
        else {
            if (milliSecondsTime / 1000 === 0) {
                clearTimeout(timer);
                el.innerHTML = 'BOOOOM';
                isStarted = false;
            } else {
                el.innerHTML = showtime(milliSecondsTime);
            }
        }
    },1000);
}
function showtime(time)
{
    let milliseconds = parseInt((time%1000))
        , seconds = parseInt((time/1000)%60)
        , minutes = parseInt((time/(1000*60))%60)
        , hours = parseInt((time/(1000*60*60))%24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds;
}

function start()
{
    if (!isStarted) {
        changeButton();
        isStarted = true;
        play();
    }
    else {
        changeButton();
        isStarted = false;
    }
}
function changeButton()
{
    let button = document.querySelector(".play_button");
    if (!isStarted){
        button.style.border = "10px solid red";
        button.style.boxShadow = "0 0 10px red"
    }
    else {
        button.style.border = "10px solid greenyellow";
        button.style.boxShadow = "0 0 10px greenyellow"
    }
}


