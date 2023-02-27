
// lista delle email registrate
const emailsList = ["pippopluto@gmail.com", "mariorossi@gmail.com", "marcobianchi@gmail.com"];


// chiedo all'utente la sua email
const emailUser = prompt("Inserisci qui la tua email");

for (let i = 0; i < emailsList.length; i++) {
    
    if (emailUser == emailsList[i]) {
        console.log("email corretta");
        break;
    } else if (i == (emailsList.length -1)) {
        console.log("email errata");
    }
    
}