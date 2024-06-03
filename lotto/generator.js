// ELEMENTTIEN_HAKEMINEN

const myButton = document.getElementById("myButton")
        const resetButton = document.getElementById("resetButton")
        const nro1 = document.getElementById("nro1")
        const nro2 = document.getElementById("nro2")
        const nro3 = document.getElementById("nro3")
        const nro4 = document.getElementById("nro4")
        const nro5 = document.getElementById("nro5")
        const nro6 = document.getElementById("nro6")
        const nro7 = document.getElementById("nro7")
        const min = 1;
        const max = 40;

        myButton.onclick = function () {
// NUMERO_GENERAATTORI
            //alla oleva silmukka varmistaa, etta kaikki seitseman numeroa ovat ainutlaatuisia ja erilaisia toisistaan.
            let numbers = new Set();
            while (numbers.size < 7) {
                let randomNum = Math.floor(Math.random() * max) + min;
                numbers.add(randomNum);
            }
            let sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

// NAYTETAAN_NUMEROT_HTML-ELEMENTEISSA
            nro1.textContent = sortedNumbers[0];
            nro2.textContent = sortedNumbers[1];
            nro3.textContent = sortedNumbers[2];
            nro4.textContent = sortedNumbers[3];
            nro5.textContent = sortedNumbers[4];
            nro6.textContent = sortedNumbers[5];
            nro7.textContent = sortedNumbers[6];
        }

        resetButton.onclick = function () {
// TYHJENNETAAN_NUMEROT_HTML-ELEMENTEISTA
            nro1.textContent = '';
            nro2.textContent = '';
            nro3.textContent = '';
            nro4.textContent = '';
            nro5.textContent = '';
            nro6.textContent = '';
            nro7.textContent = '';
        }