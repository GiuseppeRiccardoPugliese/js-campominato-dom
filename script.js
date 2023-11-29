/*
Consegna
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

/*
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/

//Scomposizione del problema:
// 1 L'utente clicca sul bottone play per generare la griglia di gioco
// 2 Ogni cella dovra' avere un numero progressivo da 1 a 100 (for)
// 3 Al click dell'utente si colora la cella e dovra' uscire in console il numero della cella cliccata

//Si showa la griglia al click
const btnPlay = document.getElementById('playbtn');
btnPlay.addEventListener('click',

    function () {
        let grigliaNascosta = document.querySelector(".hidden");
        grigliaNascosta.style.display = "block";
    }
);

const gridElement = document.getElementById("grid");

//Ciclo for per avere le mie celle
for (let i = 1; i <= 100; i++) {

    const newElement = createMyElement("div", "square");
    gridElement.append(newElement);
    newElement.append(i);

    //funzione per colorare la cella all'interno della griglia
    newElement.addEventListener('click',
        function () {
            console.log("Hai cliccato una cella", i);
            newElement.classList.add('clicked');
        }
    );
}

//Definisco la funzione
function createMyElement(tagtype, classname) {

    const currentElement = document.createElement(tagtype);
    currentElement.classList.add(classname);

    return currentElement;
};