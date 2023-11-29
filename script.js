/*
Consegna
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
*/

//DIVISIONE DEL PROBLEMA IN SOTTO PROBLEMI:
// 1 Devo far generare al computer 16 numeri casuali (max una bomba per cella)
// 2 Al click dell'utente la cella si colora di rosso OVVERO la cella contenente LA BOMBA
// 3 Al click di una bomba la partita termina
// 4 Al termine della partita comunichiamo il punteggio (cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba)

/*************************************************
    GLOBAL VARIABLES
 *************************************************/
//Selezione del contenitore all'interno del mio index
const gridElement = document.getElementById("grid");
//Richiamo il mio array vuoto prima espresso nella funzione e gli dico cose nello specifico
//const newArrNum = genArrayRandomNum(1, 16, 100);
// console.log(newArrNum);






//Si showa la griglia al click
const btnPlay = document.getElementById('playbtn');
btnPlay.addEventListener('click',

    function () {
        let grigliaNascosta = document.querySelector(".hidden");
        grigliaNascosta.style.display = "block";
    }
);

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


/*************************************************
    FUNCTIONS
 *************************************************/

//Definisco la funzione per il tipo di tag ed il nome della classe
function createMyElement(tagtype, classname) {

    const currentElement = document.createElement(tagtype);
    currentElement.classList.add(classname);

    return currentElement;
};

//Definisco la funzione che crea un array, richiamando anche quella di due valori randomici (min, max)
function genArrayRandomNum(minNum, maxNum, lengthArr) {

    //Creo il mio array vuoto da "popolare" e poi da far ritornare il valore dell'array stesso pero' "completo"
    let arrayToGen = [];

    //Ciclo che popolera' il mio array
    while (arrayToGen.length < lengthArr) {

        //richiamo la mia funzione per generare un numero random (min, max)
        let newNumber = genRandomNum(minNum, maxNum);

        //allora SE il mio numero generato NON e' nell'array:
        if (!arrayToGen.includes(newNumber)) {

            //ALLORA lo inserisco nell'array
            arrayToGen.push(newNumber);
        }
    }

    return arrayToGen;
}

//Definisco la funzione per generare un numero random in un range di (min, max) 
//(in questo caso funzione utile da richiamare per generare il mio array con min max randomici)
function genRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}