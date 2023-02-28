
// lista delle email registrate
const emailsList = ["pippopluto@gmail.com", "mariorossi@gmail.com", "marcobianchi@gmail.com"];


// chiedo all'utente la sua email
const emailUser = prompt("Inserisci qui la tua email");


// creo collegamento con il DOM
const outcomeDom = document.getElementById("outcome");

let possoPassare = false;

for (let i = 0; i < emailsList.length; i++) {
    
    emailCorrente = emailsList[i];

    if (emailCorrente == emailUser) {
        possoPassare = true;
    }
    
}

if (possoPassare) {
    console.log("puoi accedere");
} else {
    console.log("non puoi accedere");
}