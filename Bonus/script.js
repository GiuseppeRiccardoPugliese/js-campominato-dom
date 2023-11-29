/*
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/

const btnPlay = document.getElementById('playbtn');
const gridElement = document.getElementById("grid");


//Si showa al click
btnPlay.addEventListener('click',

    function () {

        let selectDifficulty = parseInt(document.getElementById('difficulty').value);
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
                    console.log("Hai cliccato una cella", i);
                    newElement.classList.add('clicked');
                }
            );
        }

    }
);

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