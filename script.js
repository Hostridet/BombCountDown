let time = new Date(0, 0, 0, 0, 0, 0, 0);
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
            toTime.setSeconds(toTime.getSeconds()-1);
            console.log(toTime.getSeconds);
            timeout = setTimeout(timer, 1000);
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
    let sec = selector[0].value.split(' ')[0]
    let min = selector[1].value.split(' ')[0]
    let hour = selector[2].value.split(' ')[0]
    if (Math.floor(sec + min + hour) !== 0)
    {
        toTime = new Date(0, 0,0, hour, min, sec,0);
        return true;
    }
    else
        return false;
}

function showTime()
{
    let el = document.querySelector('.timer');
    el.innerHTML = toTime.toLocaleTimeString();
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
