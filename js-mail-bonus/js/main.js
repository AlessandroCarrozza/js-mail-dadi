
// lista delle email registrate
const emailsList = ["pippopluto@gmail.com", "mariorossi@gmail.com", "marcobianchi@gmail.com"];


// collegamenti al DOM
const emailUserDom = document.getElementById("email");
const outcomeDom = document.getElementById("outcome");
const btnSendDom = document.getElementById("btn-send");


// evento al click
btnSendDom.addEventListener("click", 
    
    function() {
        for (let i = 0; i < emailsList.length; i++) {
                
            const emailUser = emailUserDom.value;

            if (emailUser == emailsList[i]) {
                outcomeDom.innerHTML = `La tua Email "${emailUser}" è registrata, puoi accedere.`;
                break;
            } else if (i == (emailsList.length -1)) {
                outcomeDom.innerHTML = `La tua Email "${emailUser}" non è registrata.`;
            }               
        }
    })