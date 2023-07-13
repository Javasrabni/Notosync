document.title='Asyncs_ - Low search engine';

const image = document.getElementById("myimg");

let Button1 = document.createElement('button');
let Button2 = document.createElement('button');


Button1.innerHTML = "Muncul";
Button2.innerHTML = "Hilang";
// document.body.append(Button1, Button2)

Button1.style.marginRight = "10px"

let Teks = document.createTextNode("Anjay");

Button1.addEventListener('click', () => {
    document.body.append(Teks)
})

Button2.addEventListener('click', () => {
    Teks.remove()
})


Button1.addEventListener('mouseover', () => {
    Button1.style.padding = "4px"
    Button1.style.cursor = "pointer"
});
Button1.addEventListener('mouseleave', () => {
    Button1.style.padding = "0"
})

Button2.addEventListener('mouseover', () => {
    Button2.style.padding = "4px"
    Button2.style.cursor = "pointer"
});
Button2.addEventListener('mouseleave', () => {
    Button2.style.padding = "0"
})

/* =========================================
============= Random Teks Genrator ========= 
============================================ */

const array$ = ["aku bisa karena kita bisa", "aku bisa abku bisa", "kalian adalah teman baik ku"];
let TeksArray = document.getElementById('paragraf');


let Button = document.getElementById('buttonArray');
Button.textContent = "Genrate text"
Button.classList.add('buttonArray')


Button.addEventListener('click', () => {
    let RandomArray = Math.floor(Math.random() * array$.length);
    TeksArray.innerHTML = array$[RandomArray];
});


/* =========================================
============= Search engine ================ 
============================================ */

const inputs = document.getElementById('inputs');
inputs.classList.add('inputEngine');

const buttonInput$ = document.getElementById('buttonInput');
buttonInput$.classList.add('buttonEngine');
buttonInput$.textContent = "Search";

// Metode Submit Button
buttonInput$.addEventListener('click', () => {
    let valueInput$ = inputs.value.toLowerCase();

    if (!valueInput$) {
        inputs.style.outline = "1px solid red";
        document.querySelector('#noValue').append(noValue$);
        // alert("Please input first!")
        e.preventDefault();
    } else {
        inputs.value = "";

        window.open(`http://www.google.com/search?q= + ${valueInput$}`, "_blank");
        noValue$.style.display = "none"
    }
})

// Metode Submit Enter
inputs.addEventListener('keyup', (e) => {
    let valueInput$ = inputs.value.toLowerCase();

    if (e.key === "Enter") {
        if (!valueInput$) {
            inputs.style.outline = "1px solid red";

            e.preventDefault();
            document.querySelector('#noValue').append(noValue$);

            // alert("Please input first!")
        } else {
            inputs.value = "";

            noValue$.style.display = "none"
            window.open(`http://www.google.com/search?q= + ${valueInput$}`, "_blank");
        }
    };
})

// Elemen error (if No value inputed)
let noValue$ = document.createElement('p');
noValue$.innerHTML = "Sebelum nyari, di isi dulu masbro 😎";

inputs.addEventListener('input', () => {
    let valueInput$ = inputs.value.toLowerCase();
    inputs.style.outline = "none";
    if (!valueInput$) {
        inputs.style.outline = "1px solid red"

        document.querySelector('#noValue').append(noValue$);
    } else {
        noValue$.remove()
        inputs.style.outline = "none";

    }
})



// Metode window.open()
const buka = document.getElementById('open$');
buka.textContent = "windows open";
buka.style.padding = "10px"
buka.style.margin = "50px"

let link$ = "https://stackoverflow.com/questions/3397113/how-to-remove-focus-border-outline-around-text-input-boxes-chrome"
buka.addEventListener('click', () => {
    window.open(link$), "_blank"
})

// Metode location.replace();
const replace$ = document.getElementById('replacee');
replace$.textContent = "metode replace";
replace$.style.padding = "10px";

replace$.addEventListener('click', () => {
    location.replace(link$)
})