var timer = null;
var countdownNumber = 10;

var changeState = function (state) {
    document.body.className = 'body-state' + state
    clearInterval(timer);
    if (state == 2) {
        timer = setInterval (function () {
            document.getElementById('countdown').innerHTML = countdownNumber;
            countdownNumber = countdownNumber -1;
        if (countdownNumber <=0) {
            changeState(3);
        }
        }, 500);
    } else if( state == 3) {

        var succes = setTimeout(function () {
            var randomNumber = Math.round (Math.random()*10);
            //well_done
            if (randomNumber > 5) {
            changeState (4);
            } else {
                changeState (5); 
                //ohno!
            }
        }, 2000);
    };
};