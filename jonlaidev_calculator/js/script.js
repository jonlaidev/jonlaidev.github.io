//functio_append_to_result_result_function

let result = document.getElementById('result');

//light_to_dark

const themeToggle = document.getElementById('themeToggle');
//dark
const storedTheme = localStorage.getItem('theme')
if(storedTheme =='dark'){
        document.documentElement.style.setProperty('--bg-color', '#5e5b5b');
        document.documentElement.style.setProperty('--text-color', '#ffffff');
        document.documentElement.style.setProperty('--keypad_bg_color0', '#00000069');
        document.documentElement.style.setProperty('--keypad-bg-color1', '#a01d00');
        themeToggle.checked=true;
}
//light
else {
    document.documentElement.style.setProperty('--bg-color', '#ffffff');
    document.documentElement.style.setProperty('--text-color', '#000000');
    document.documentElement.style.setProperty('--keypad_bg_color0', '#ff0000');
    document.documentElement.style.setProperty('----keypad-bg-color1', '#00000038');
}
//dark
themeToggle.addEventListener('change',function(){
    if(this.checked){
        document.documentElement.style.setProperty('--bg-color', '#5e5b5b');
        document.documentElement.style.setProperty('--text-color', '#ffffff');
        document.documentElement.style.setProperty('--keypad_bg_color0', '#00000069');
        document.documentElement.style.setProperty('--keypad-bg-color1', '#a01d00');
        localStorage.setItem('theme','dark')
        }
//light        
    else {
        document.documentElement.style.setProperty('--bg-color', '#ffffff');
        document.documentElement.style.setProperty('--text-color', '#000000');
        document.documentElement.style.setProperty('--keypad_bg_color0', '#ff0000');
        document.documentElement.style.setProperty('--keypad-bg-color1', '#00000038');
        localStorage.setItem('theme','light')
    }
})

//functions_section

function appendToResult(value){
    result.value+=value;
    playButtonSound();

}

function backspace (){
    if(result.value=='Error'){
        result.value = '';
    }
    result.value = result.value.slice(0,-1);

    playButtonSound();
}

function clearResult() {
    result.value = '';
    playButtonSound();
}

function calculate(){
    playButtonSound();
    try{
        if(result.value==''){
            result.value=='0'
        }
        result.value = eval(result.value)
    }

    catch(e){
        result.value = 'Error'
    }
}

function playButtonSound(){
    const buttonSound = document.getElementById('buttonSound');
    buttonSound.currentTime = 0;
    buttonSound.play();
}