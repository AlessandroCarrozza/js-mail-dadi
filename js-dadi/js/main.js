
// creo collegamento con il DOM
const resultDom = document.getElementById("result");

// assegno alle due variabili un numero casuale da 1 a 6
let numUser = Math.floor(Math.random() * 6) + 1;
let numPc = Math.floor(Math.random() * 6) + 1;


if (numUser > numPc) {
    resultDom.innerHTML = `L'utente ha vinto per ${numUser} a ${numPc}.`;
} else if (numUser < numPc) {
    resultDom.innerHTML = `L'utente perso per ${numUser} a ${numPc}.`;
} else {
    resultDom.innerHTML = `L'utente ha pareggiato per ${numUser} a ${numPc}.`;
}