//
// Queries and variables
//

const timer = document.getElementById('countdown');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');




// 
// Functions
//

function playStart() {
    var sec = 01;

    var min = 00;

    var timerChange = setInterval(function() {
        if (sec < 10) {
            timer.innerHTML=`0${min}:0${sec}`;
            sec++;
        } else {
            timer.innerHTML=`0${min}:${sec}`;
            sec++;
        }
        if (sec % 60 === 0) {
            min++;
            sec = 00;
        }
    }, 10);

}

