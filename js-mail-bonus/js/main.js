
// lista delle email registrate
const emailsList = ["pippopluto@gmail.com", "mariorossi@gmail.com", "marcobianchi@gmail.com"];


// collegamenti al DOM
const emailUserDom = document.getElementById("email");
const outcomeDom = document.getElementById("outcome");
const btnSendDom = document.getElementById("btn-send");



// evento al click
btnSendDom.addEventListener("click", 
    
    function() {

        const emailUser = emailUserDom.value;

        let possoPassare = false;

        for (let i = 0; i < emailsList.length; i++) {

            const emailCorrente = emailsList[i];             
            
            if (emailCorrente == emailUser) {
                possoPassare = true;
            }
            
        }

        if (possoPassare) {
            outcomeDom.innerHTML += "Puoi accedere";
        } else {
            outcomeDom.innerHTML += "Non puoi accedere";
        } 
        
    })


  