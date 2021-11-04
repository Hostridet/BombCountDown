let time = new Date(0, 0,0, 0, 0, 0,0);;
let toTime = time;
let timeout;
showTime();


function start()
{
    if (setTime())
    {
        showTime();
        changeButton(false);
        clearTimeout(timeout);
        timer();
    }
}

async function timer(){
    let promise = new Promise((resolve) => {
        showTime()
        if (toTime > time){
            toTime.setMilliseconds(toTime.getMilliseconds() - 5);
            timeout = setTimeout(timer, 1);
        }
        else{
            resolve("COPY PASTE");
        }
    })
    promise.then(str => {
        document.querySelector('.timer').innerHTML = str.toString()
        changeButton(true);
    });
}


function setTime()
{
    let selector = document.querySelectorAll('.selector_choose');
    let ms = selector[0].value.split(' ')[0]
    let sec = selector[1].value.split(' ')[0]
    let min = selector[2].value.split(' ')[0]
    if (Math.floor(ms + sec + min) !== 0)
    {
        toTime = new Date(0, 0,0, 0, min, sec,ms);
        return true;
    }
    else
        return false;
}

function showTime()
{
    let el = document.querySelector('.timer');
    let min = addZero(toTime.getMinutes(), 2);
    let sec = addZero(toTime.getSeconds(), 2);
    let ms = addZero(toTime.getMilliseconds(), 3);
    el.innerHTML = min + ":" + sec + ":" + ms;
}

function changeButton(isStarted)
{
    let button = document.querySelector(".play_button");
    if (!isStarted){
        button.style.border = "10px solid red";
        button.style.boxShadow = "0 0 5px red"
        button.innerHTML = "restart"
    }
    else {
        button.style.border = "10px solid greenyellow";
        button.style.boxShadow = "0 0 5px greenyellow"
        button.innerHTML = "start"
    }
}
function addZero(x ,n)
{
    while (x.toString().length < n)
        x = "0" + x;
    return x;
}


