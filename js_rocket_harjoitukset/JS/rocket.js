var timer = null;
var countdownNumber = 10;
    //state_timer_from_html
var changeState = function (state) {
    document.body.className = 'body-state' + state
    clearInterval(timer);
    countdownNumber = 10;
    //log
    console.log('countdownNumber' + countdownNumber)
    document.getElementById('countdown').innerHTML = countdownNumber;
    //countdown
    if (state == 2) {
        timer = setInterval (function () {
            countdownNumber = countdownNumber -1;
            document.getElementById('countdown').innerHTML = countdownNumber;
        if (countdownNumber <=0) {
            changeState(3);
        }
        //countdown_speed
        }, 500);
    } else if( state == 3) {

        var succes = setTimeout(function () {
            var randomNumber = Math.round (Math.random()*10);
            //log
            console.log('randomNumber:'+ randomNumber)
            //succes
            if (randomNumber > 5) {
            changeState (4);
            } else {
                changeState (5); 
            //ohno!
            }
        }, 2000);
    };
};