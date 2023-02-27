
// lista delle email registrate
const emailsList = ["pippopluto@gmail.com", "mariorossi@gmail.com", "marcobianchi@gmail.com"];


// chiedo all'utente la sua email
const emailUser = prompt("Inserisci qui la tua email");


// creo collegamento con il DOM
const outcomeDom = document.getElementById("outcome");


for (let i = 0; i < emailsList.length; i++) {
    
    if (emailUser == emailsList[i]) {
        outcomeDom.innerHTML = `La tua Email "${emailUser}" è registrata, puoi accedere.`;
        break;
    } else if (i == (emailsList.length -1)) {
        outcomeDom.innerHTML = `La tua Email "${emailUser}" non è registrata.`;
    }
    
}