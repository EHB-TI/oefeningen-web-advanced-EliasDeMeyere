'use strict'


let getal = Math.floor(Math.random() * 20 ) + 1;
console.log(getal)

window.onload = () => {
    console.log("LOADED");
    
    document.getElementById("form").addEventListener('submit', function(evt){
        evt.preventDefault();
        let gok = document.getElementById("guess").value;
        console.log(gok)
        return gok;
    });


    const raadGetal = new Promise(function(WelGetal, GeenGetal) {
        if (isNaN(guess)){
            return GeenGetal
        } else if (guess > getal) {
            return WelGetal('A');
        } else if (guess < getal) {
            return WelGetal('B');
        } else {
            return WelGetal('C')
        }
    });

    raadGetal.then(
        function GeenGetal(){
            alert("Error! Gelieve een getal in te voeren")
        },
        function WelGetal(value){
            switch (value){
                case 'A': 
                    console.log("Te hoog")
                    break;
                case 'B':
                    console.log("Te laag")
                    break;
                case 'C':
                    console.log('U heeft het getal geraden!');
                    break;
            }
        }
    );
}