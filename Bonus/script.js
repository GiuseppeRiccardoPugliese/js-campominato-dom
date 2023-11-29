/*
BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà: - difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe; - difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe; - difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

Super Bonus:
Quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle;
Quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste.
*/

const btnPlay = document.getElementById('playbtn');
const gridElement = document.getElementById("grid");
//variabile per far fermare il gioco quando si perde
let gameOver = false;
//variabile per il punteggio
let punteggio = 0;

//Si showa al click
btnPlay.addEventListener('click',

    function () {
        //Reimposto il mio gameover con value false cosi' che ricliccando sul btn play possa ricominciare il gioco
        gameOver = false;
        //Resetto il valore del punteggio dell'utente
        let punteggio = 0;

        let selectDifficulty = parseInt(document.getElementById('difficulty').value);

        const arrBomb = genArrayRandomNum(1, maxLunghezza(selectDifficulty), 16);
        console.log(arrBomb);

        //Stringa vuota per non far generare la griglia piu' di una volta
        gridElement.innerHTML = "";

        //Ciclo for per avere le mie celle modalita' easy
        for (let i = 1; i <= maxLunghezza(selectDifficulty); i++) {

            const newElement = createMyElement("div", "square", selectDifficulty);
            gridElement.append(newElement);
            newElement.append(i);

            //funzione per colorare la cella all'interno della griglia
            newElement.addEventListener('click',
                function () {
                    if (gameOver) return; //Fermo la mia funzione quando ho cliccato su una bomba grazie a return

                    if (arrBomb.includes(i)) {
                        newElement.classList.add('clicked-bomb');
                        alert(`HAI PERSOOO  :(  Il tuo punteggio e' :  ${punteggio}`);

                        gameOver = true; //forzo la mia variabile del gameOver a true quando sono in questa condizione

                        // Rivelare tutte le bombe
                        revealAllBombs(arrBomb);

                        console.log("Punteggio dell'utente :", punteggio);
                    } else {
                        newElement.classList.add('clicked');
                        punteggio++;
                    }
                    console.log("Hai cliccato una cella", i);
                }
            );
        }

    }
);



/*************************************************
    FUNCTIONS
 *************************************************/

//Definisco la funzione per creare il div e creare la cella
function createMyElement(tagtype, classname, selectDifficulty) {

    const currentElement = document.createElement(tagtype);
    currentElement.classList.add(classDifficulty(selectDifficulty, classname));

    return currentElement;
};

//Definisco la funzione per la lunghezza in base alla difficolta'
function maxLunghezza(selectDifficulty) {

    //Condizione in base alla difficolta'
    if (selectDifficulty === 0) { //Condizione se e' in modalita' easy
        lunghezza = 100;
    } else if (selectDifficulty === 1) { //Condizione se e' in modalita' normal
        lunghezza = 81;
    } else if (selectDifficulty === 2) { //Condizione se e' in modalita' hard
        lunghezza = 49;
    }
    return lunghezza;
}

//Definisco la funzione per selezionare la classe in base alle difficolta' che mi cambia le colonne
function classDifficulty(selectDifficulty, classname) {
    //Condizione in base alla difficolta'
    if (selectDifficulty === 1) { //Condizione se e' in modalita' MID
        classname = "square-medium";
    } else if (selectDifficulty === 2) { //Condizione se e' in modalita' HARD
        classname = "square-hard";
    }
    return classname;
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
            console.log('Valore max per randomNum: ', maxNum);
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

// Nuova funzione per rivelare tutte le bombe alla fine del gioco
function revealAllBombs(bombArray) {
    bombArray.forEach(bombIndex => {
        const bombCell = document.querySelector(`.square:nth-child(${bombIndex})`);
        bombCell.classList.add('clicked-bomb');
    });
}