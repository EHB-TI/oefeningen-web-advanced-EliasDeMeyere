'use strict'


let getal = Math.floor(Math.random() * 20 ) + 1;
console.log(getal)

window.onload = () => {
    console.log("LOADED");
     
    let raadGetal = new Promise((WelGetal, GeenGetal) => {
        document.getElementById("form").addEventListener('submit', function(evt){
            evt.preventDefault();
            let gok = document.getElementById("gok").value;
            if (isNaN(gok) || gok == null){
                GeenGetal("Error, not a number!")
            }else {
                return WelGetal('Well een nummer kennelijk')
            }
        });   
    });

    raadGetal.then((message) => {
        console.log("This is the then, " + message);
    }).catch((message) => {
        console.log(message);
    });
}